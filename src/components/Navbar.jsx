import { Link } from "react-router-dom";
import { UserAuth } from "../utils/AuthContext";

export default function Navbar() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="navbar bg-base-100 px-20 fixed animate-fade-down animate-ease-in-out animate-delay-500  animate-duration-700 top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            {user?.displayName ? (
              <li className=" animate-fade animate-ease-in-out">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          <div className=" bg-gradient-to-r from-secondary/80 via-primary to-primary bg-clip-text">
            <span className="text-transparent">FreeGameFiesta</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="about">About</Link>
          </li>
          {user?.displayName ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.displayName ? (
          <button
            className="btn animate-fade animate-ease-in-out btn-primary normal-case rounded-xl px-5"
            onClick={handleSignOut}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn animate-fade animate-ease-in-out btn-primary normal-case rounded-xl px-5"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
