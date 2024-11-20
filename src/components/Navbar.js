import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                CubeCloud
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                Commands
              </Link>
            </li>
            <li>
              <Link className="p-color"
                href="https://github.com/Sargenttim/CCtos-pp/blob/main/Privacy%20Policy"
                target="_blank"
                >
              Privacy Policy
              </Link>
            </li>
            <Link className="p-color"
                href="https://github.com/Sargenttim/CCtos-pp/blob/main/Terms%20of%20Service"
                target="_blank"
                >
              Terms of Service
            </Link>
            <li>
              <Link
                className="p-color"
                href="https://discord.gg/m4RBuRUuhB"
                target="_blank"
              >
                Discord Server
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
