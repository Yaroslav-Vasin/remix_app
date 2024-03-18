import { NavLink } from "@remix-run/react";

function MainNavigation() {
  return (
    <nav id="main-navigation" className="bg-gray-800 py-4">
      <ul className="flex justify-center">
        <li className="mr-6">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-red-600"
                : isActive
                ? "text-purple-600"
                : "text-white hover:text-purple-600 transition duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to="/notes"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-red-600"
                : isActive
                ? "text-purple-600"
                : "text-white hover:text-purple-600 transition duration-300"
            }
          >
            My notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
