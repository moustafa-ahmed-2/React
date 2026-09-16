import en from './en.json';
import ar from './ar.json';

export const resources = { en, ar } as const;

export type Language = keyof typeof resources;

export const DEFAULT_LANGUAGE: Language = 'en';
