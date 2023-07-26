import { IconType } from 'react-icons';
import {
  BiLogoDocker,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from 'react-icons/bi';
import {
  SiNestjs,
  SiNuxtdotjs,
  SiOracle,
  SiPostgresql,
  SiPrisma,
  SiVite,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
export type Icon = IconType;

export type IconConf = { icon: Icon; color: string; key: string };

export const workingStack: IconConf[] = [
  { key: 'nextj', icon: TbBrandNextjs, color: '#fff' },
  { key: 'react', icon: BiLogoReact, color: '#61DAFB' },
  { key: 'prisma', icon: SiPrisma, color: '#fff' },
  { key: 'tailwind', icon: BiLogoTailwindCss, color: '#06B6D4' },
  { key: 'node', icon: BiLogoNodejs, color: '#339933' },
  { key: 'nest', icon: SiNestjs, color: '#E0234E' },
  { key: 'java', icon: BiLogoJava, color: '#F89820' },
  { key: 'docker', icon: BiLogoDocker, color: '#2496ED' },
  { key: 'postgres', icon: SiPostgresql, color: '#4169E1' },
  { key: 'oracle', icon: SiOracle, color: '#F80000' },
  { key: 'ts', icon: BiLogoTypescript, color: '#3178C6' },
  { key: 'js', icon: BiLogoJavascript, color: '#F7DF1E' },
];

export const funStack: IconConf[] = [
  { key: 'vue', icon: BiLogoVuejs, color: '#4FC08D' },
  { key: 'nuxt', icon: SiNuxtdotjs, color: '#00DC82' },
  { key: 'mongo', icon: BiLogoMongodb, color: '#47A248' },
  { key: 'python', icon: BiLogoPython, color: '#3776AB' },
  { key: 'vite', icon: SiVite, color: '#646CFF' },
];
