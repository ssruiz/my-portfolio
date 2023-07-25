import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <div className="mt-10 hidden lg:flex lg:flex-col">
      <NavbarItem sectionId="about" title="About me" />
      <NavbarItem sectionId="experiences" title="Experience" />
      <NavbarItem sectionId="stack" title="My stack" />
    </div>
  );
};

export default Navbar;
