'use client';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  title: string;
  sectionId: string;
}

const NavbarItem: React.FC<Props> = ({ sectionId, title }) => {
  const activeId = useScrollSpy(['about', 'experiences', 'stack'], 500);
  return (
    <Link
      href={`#${sectionId}`}
      className={clsx(
        'text-xs font-bold uppercase tracking-widest p-4 cursor-pointer flex items-center gap-5 group',
        {
          active: activeId === sectionId,
        }
      )}
    >
      <span className="h-[1px] w-8 bg-white group-[.active]:w-16 group-hover:w-16 transition-all"></span>
      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-[.active]:text-slate-200 group-focus-visible:text-slate-200">
        {title}
      </span>
    </Link>
  );
};

export default NavbarItem;
