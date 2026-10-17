import type {
  GlobalSettings,
  Service,
  Project,
  Article,
  ProjectType,
} from '@/types';
import { globalSettings } from '@/data/globalSettings';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { insightsData } from '@/data/insights';

/**
 * Global Settings Data Access
 */
export function getGlobalSettings(): GlobalSettings {
  return globalSettings;
}

/**
 * Services Data Access
 */
export function getServices(category?: string): Service[] {
  if (!category) return servicesData;
  return servicesData.filter(
    (s) => s.category?.toLowerCase() === category.toLowerCase()
  );
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}

/**
 * Projects Data Access
 */
export function getProjects(projectType?: ProjectType): Project[] {
  if (!projectType) return projectsData;
  return projectsData.filter((p) => p.projectType === projectType);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projectsData.slice(0, limit);
}

/**
 * Insights Data Access
 */
export function getArticles(category?: string): Article[] {
  if (!category) return insightsData;
  return insightsData.filter(
    (a) => a.category?.toLowerCase() === category.toLowerCase()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return insightsData.find((a) => a.slug === slug);
}

export function getRecentArticles(limit = 3): Article[] {
  return insightsData.slice(0, limit);
}
