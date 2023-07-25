import { themePreset } from './src/lib/theme-preset';
import type { Config } from 'tailwindcss';

const config = {
  presets: [themePreset],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
} satisfies Config;

export default config;
