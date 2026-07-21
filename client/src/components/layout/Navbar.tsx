import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>

          <li>
            <NavLink to="/applications">Applications</NavLink>
          </li>

          <li>
            <NavLink to="/applications/new">Add Application</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div className="navbar mx-auto max-w-7xl px-4">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-64 rounded-box bg-base-100 p-2 shadow-lg z-[100]"
            >
              {navLinks}

              <div className="divider my-1"></div>

              {user ? (
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>

                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}

          <Link to="/" className="text-2xl font-bold text-primary">
            CareerTrack
            <span className="text-base-content">Lite</span>
          </Link>
        </div>

        {/* Desktop Menu */}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
        </div>

        {/* Right */}

        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar placeholder"
              >
                <div className="bg-primary text-primary-content rounded-full w-10">
                  <span>{user.email.charAt(0).toUpperCase()}</span>
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 w-60 rounded-box bg-base-100 p-2 shadow-lg z-[100]"
              >
                <li className="menu-title">
                  <span>{user.email}</span>
                </li>

                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>

                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost hidden sm:flex">
                Login
              </Link>

              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
