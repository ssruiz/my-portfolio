import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJava,
  BiLogoDocker,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJavascript,
} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiNestjs, SiPrisma } from 'react-icons/si';
import { IconType } from 'react-icons';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
export type Icon = IconType;

export const Icons: { [key: string]: Icon } = {
  react: BiLogoReact,
  nextjs: TbBrandNextjs,
  node: BiLogoNodejs,
  nestjs: SiNestjs,
  java: BiLogoJava,
  docker: BiLogoDocker,
  tailwind: BiLogoTailwindCss,
  ts: BiLogoTypescript,
  js: BiLogoJavascript,
  html: AiFillHtml5,
  css: DiCss3,
  prisma: SiPrisma,
} as const;
