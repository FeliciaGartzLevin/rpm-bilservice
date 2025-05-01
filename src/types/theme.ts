export const themeValues = ['light', 'dark', 'pink'] as const;

export type ThemeType = (typeof themeValues)[number];
