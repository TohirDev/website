function Navbar() {
  return (
    <nav className="mt-4 mb-8 text-center text-base  text-white flex justify-center navbar container mx-auto">
      <ul className="flex">
        <li>
          <a href="/" className="px-4">
            Home{" "}
          </a>
        </li>
        <li>
          <a href="/projects" className="px-4">
            Projects
          </a>
        </li>
        <li>
          <a href="/setup" className="px-4">
            Setup
          </a>
        </li>
        <li>
          <a href="/contact" className="px-4">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
