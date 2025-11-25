export interface LoaderConfig {
  color: string;
  size: number; // pixels
  speed: number; // seconds
}

export interface LoaderItem {
  id: string;
  name: string;
  html: string;
  css: string;
  type: 'spinner' | 'dots' | 'bar' | 'pulse' | 'grid' | 'other';
  isAiGenerated?: boolean;
}

export type LoaderCategory = 'all' | LoaderItem['type'];

export interface GeneratedLoaderResponse {
  name: string;
  html: string;
  css: string;
}
