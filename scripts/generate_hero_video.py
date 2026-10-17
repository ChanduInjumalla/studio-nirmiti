#!/usr/bin/env python3
import os
import sys
import subprocess
import numpy as np
from PIL import Image

KEYFRAMES = [
    {
        "file": "public/images/hero-scroll/01_distant_plain.jpg",
        "scale_start": 1.00,
        "scale_end": 1.12,
        "pan_y": 0.02, # slight downward pan
    },
    {
        "file": "public/images/hero-scroll/02_exterior_midtransform.jpg",
        "scale_start": 1.00,
        "scale_end": 1.10,
        "pan_y": 0.01,
    },
    {
        "file": "public/images/hero-scroll/03_exterior_complete.jpg",
        "scale_start": 1.00,
        "scale_end": 1.10,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/04_entrance_approach.jpg",
        "scale_start": 1.00,
        "scale_end": 1.14,
        "pan_y": -0.01, # entering door
    },
    {
        "file": "public/images/hero-scroll/05_foyer_entry.jpg",
        "scale_start": 1.00,
        "scale_end": 1.12,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/06_living_shell.jpg",
        "scale_start": 1.00,
        "scale_end": 1.08,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/07_living_complete.jpg",
        "scale_start": 1.00,
        "scale_end": 1.08,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/08_kitchen_shell.jpg",
        "scale_start": 1.00,
        "scale_end": 1.10,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/09_kitchen_complete.jpg",
        "scale_start": 1.00,
        "scale_end": 1.08,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/10_bedroom_shell.jpg",
        "scale_start": 1.00,
        "scale_end": 1.10,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/11_bedroom_complete.jpg",
        "scale_start": 1.00,
        "scale_end": 1.08,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/12_bathroom_complete.jpg",
        "scale_start": 1.00,
        "scale_end": 1.08,
        "pan_y": 0.00,
    },
    {
        "file": "public/images/hero-scroll/13_final_twilight.jpg",
        "scale_start": 1.10,
        "scale_end": 1.00, # pull back for grand estate
        "pan_y": -0.02,
    },
]

WIDTH = 1920
HEIGHT = 1080
FPS = 30
FRAMES_PER_SEGMENT = 45 # ~1.5s per transition, total 12 * 45 = 540 frames = 18s continuous video

def smoothstep(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3.0 - 2.0 * t)

def load_and_prep_image(path):
    img = Image.open(path).convert('RGB')
    # Resize to slightly larger than canvas for smooth cropping/zooming
    # target size 2200 x 1238
    target_w = int(WIDTH * 1.2)
    target_h = int(HEIGHT * 1.2)
    img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    return img

def render_frame(img, scale, pan_y=0.0):
    # img is 2200 x 1238
    base_w, base_h = img.size
    
    # Crop box for scale
    crop_w = int(WIDTH * 1.15 / scale)
    crop_h = int(HEIGHT * 1.15 / scale)
    
    center_x = base_w / 2.0
    center_y = base_h / 2.0 + (pan_y * base_h)
    
    left = int(center_x - crop_w / 2.0)
    top = int(center_y - crop_h / 2.0)
    right = left + crop_w
    bottom = top + crop_h
    
    # Clamp bounds
    left = max(0, min(base_w - crop_w, left))
    top = max(0, min(base_h - crop_h, top))
    right = left + crop_w
    bottom = top + crop_h
    
    cropped = img.crop((left, top, right, bottom))
    resized = cropped.resize((WIDTH, HEIGHT), Image.Resampling.BILINEAR)
    return np.array(resized, dtype=np.float32)

def main():
    print(f"Loading {len(KEYFRAMES)} keyframes...")
    loaded_images = []
    for kf in KEYFRAMES:
        if not os.path.exists(kf["file"]):
            print(f"Error: {kf['file']} not found!")
            sys.exit(1)
        loaded_images.append(load_and_prep_image(kf["file"]))
    print("All keyframes loaded.")

    output_dir = "public/videos"
    os.makedirs(output_dir, exist_ok=True)
    output_mp4 = os.path.join(output_dir, "hero_walkthrough_allintra.mp4")

    # ffmpeg pipe command
    # Crucial flags:
    # -g 1 (every frame is a keyframe for instantaneous 0ms scroll scrubbing)
    # -keyint_min 1
    # -c:v libx264 -preset veryfast -crf 17 (visually lossless, ultra-clean)
    ffmpeg_cmd = [
        "ffmpeg",
        "-y",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", f"{WIDTH}x{HEIGHT}",
        "-pix_fmt", "rgb24",
        "-r", str(FPS),
        "-i", "-",
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "18",
        "-g", "1",
        "-keyint_min", "1",
        "-pix_fmt", "yuv420p",
        "-movflags", "+faststart",
        output_mp4
    ]

    print(f"Starting ffmpeg encoding to {output_mp4}...")
    pipe = subprocess.Popen(ffmpeg_cmd, stdin=subprocess.PIPE)

    num_segments = len(KEYFRAMES) - 1
    total_frames = num_segments * FRAMES_PER_SEGMENT + 1

    frame_count = 0
    for seg_idx in range(num_segments):
        kf_a = KEYFRAMES[seg_idx]
        kf_b = KEYFRAMES[seg_idx + 1]
        img_a = loaded_images[seg_idx]
        img_b = loaded_images[seg_idx + 1]

        for step in range(FRAMES_PER_SEGMENT):
            t = step / float(FRAMES_PER_SEGMENT)
            ease_t = smoothstep(t)

            # Camera zoom/pan for A and B
            scale_a = kf_a["scale_start"] + (kf_a["scale_end"] - kf_a["scale_start"]) * t
            pan_a = kf_a.get("pan_y", 0.0) * t

            scale_b = kf_b["scale_start"] + (kf_b["scale_end"] - kf_b["scale_start"]) * (t - 1.0)
            pan_b = kf_b.get("pan_y", 0.0) * (t - 1.0)

            frame_a_arr = render_frame(img_a, scale_a, pan_a)
            frame_b_arr = render_frame(img_b, scale_b, pan_b)

            # Linear blend with smoothstep alpha
            blended = (1.0 - ease_t) * frame_a_arr + ease_t * frame_b_arr
            blended_uint8 = np.clip(blended, 0, 255).astype(np.uint8)

            pipe.stdin.write(blended_uint8.tobytes())
            frame_count += 1
            if frame_count % 30 == 0:
                print(f"Rendered {frame_count}/{total_frames} frames ({frame_count/total_frames*100:.1f}%)")

    # Render final frame
    final_kf = KEYFRAMES[-1]
    final_img = loaded_images[-1]
    final_arr = render_frame(final_img, final_kf["scale_end"], final_kf.get("pan_y", 0.0))
    pipe.stdin.write(np.clip(final_arr, 0, 255).astype(np.uint8).tobytes())
    frame_count += 1

    pipe.stdin.close()
    pipe.wait()
    print(f"Successfully generated {output_mp4} with {frame_count} all-intra frames!")

if __name__ == "__main__":
    main()
