import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer
      id="footer"
      className="text-white rounded-md space-y-2 py-6 mt-16"
      aria-label="About"
    >
      <p className="text-xs text-slate-500">
        Build with{' '}
        <Link href="https://nextjs.org/" target="_blank">
          <span className="cursor-pointer hover:text-teal-500">Nextjs </span>
        </Link>
        • Deploy on{' '}
        <Link href="https://vercel.com/" target="_blank">
          <span className="cursor-pointer hover:text-teal-500">Vercel</span>
        </Link>
      </p>
      <p className="text-xs text-slate-500">
        Design inspired in{' '}
        <Link href="https://brittanychiang.com/" target="_blank">
          <span className="cursor-pointer hover:text-teal-500">
            Brittany Chiang&apos;s page 💚{' '}
          </span>
        </Link>
      </p>
    </footer>
  );
};

export default FooterComponent;
