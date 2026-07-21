import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  PlusCircle,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (logout) {
        await logout();
      }
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col min-h-screen bg-slate-50">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-100 border-b px-4 shadow-sm">
          <label
            htmlFor="dashboard-drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-5"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <NavLink to="/" className="px-4 font-bold text-xl text-primary">
            CareerTrack Lite
          </NavLink>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <div className="flex min-h-full w-64 flex-col justify-between bg-base-200 text-base-content border-r transition-all duration-300">
          {/* Top Sidebar Content / Links */}
          <div>
            {/* Sidebar Header Title (Hidden when closed) */}
            <div className="p-3 border-b border-base-300 ">
              <h2 className="text-xl font-bold text-primary">Dashboard</h2>
              <p className="text-xs opacity-70">Application Tracker</p>
            </div>

            <ul className="menu w-full p-2 gap-1">
              {/* Dashboard */}
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 py-2 ${
                      isActive
                        ? "active font-semibold bg-primary text-primary-content"
                        : ""
                    }`
                  }
                  data-tip="Dashboard"
                >
                  <LayoutDashboard className="size-5 shrink-0" />
                  <span>Dashboard</span>
                </NavLink>
              </li>

              {/* Applications */}
              <li>
                <NavLink
                  to="/applications"
                  className={({ isActive }) =>
                    `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 py-3 ${
                      isActive
                        ? "active font-semibold bg-primary text-primary-content"
                        : ""
                    }`
                  }
                  data-tip="Applications"
                >
                  <BriefcaseBusiness className="size-5 shrink-0" />
                  <span>Applications</span>
                </NavLink>
              </li>

              {/* Add Application */}
              <li>
                <NavLink
                  to="/applications/new"
                  className={({ isActive }) =>
                    `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 py-3 ${
                      isActive
                        ? "active font-semibold bg-primary text-primary-content"
                        : ""
                    }`
                  }
                  data-tip="Add Application"
                >
                  <PlusCircle className="size-5 shrink-0" />
                  <span>Add Application</span>
                </NavLink>
              </li>

              {/* Profile */}
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 py-3 ${
                      isActive
                        ? "active font-semibold bg-primary text-primary-content"
                        : ""
                    }`
                  }
                  data-tip="Profile"
                >
                  <User className="size-5 shrink-0" />
                  <span>Profile</span>
                </NavLink>
              </li>

              {/* Settings */}
              <li>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 py-3 ${
                      isActive
                        ? "active font-semibold bg-primary text-primary-content"
                        : ""
                    }`
                  }
                  data-tip="Settings"
                >
                  <Settings className="size-5 shrink-0" />
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Bottom Sidebar: Logout Button */}
          <div className="p-2 border-t border-base-300">
            <button
              onClick={handleLogout}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right w-full flex items-center gap-3 py-3 px-3 text-error hover:bg-error/10 rounded-lg transition-colors font-medium"
              data-tip="Logout"
            >
              <LogOut className="size-5 shrink-0" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
