export const themeValues = ['light', 'dark'] as const;

export type ThemeType = (typeof themeValues)[number];
