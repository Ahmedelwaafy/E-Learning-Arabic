import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const navigate = useNavigate();
  const activeLink = ({ isActive }) => ({
    background: isActive
      ? "linear-gradient(94deg, rgba(107, 166, 255,1) 0%, rgba(107, 166, 255,1) 100%)"
      : "",
    backgroundSize: isActive ? "100% 3px" : "",
    backgroundRepeat: isActive ? "no-repeat" : "",
    backgroundPosition: isActive ? "left bottom" : "",
  });

  return (
    <header
      className=" w-full h-20
  "
    >
      <div className="fixed-container fixed top-0 left-0 right-0 w-full h-20 bg-primary z-50">
        <nav className="desktop-nav  width h-full flex justify-between items-center gap-4 sm:gap-2">
          <div className="desktop-nav__left flex justify-center items-center gap-5">
            <a
              href="#top"
              className="desktop-nav__left--logo text-2xl font-bold hover:scale-110 duration-300 tracking-widest"
            >
              TAFL
            </a>

            <div className="desktop-nav__left--language flex flex-col items-center justify-between gap-2">
              <Link
                className="border-2 border-accent  px-1  text-primary bg-accent hover:bg-primary hover:text-accent duration-300 text-sm"
                to="/en"
              >
                EN
              </Link>

              <Link
                className="border-2 border-accent  px-1  hover:text-primary hover:bg-accent bg-primary text-accent duration-300 text-sm"
                to="/ar"
              >
                AR
              </Link>
            </div>
          </div>

          <ul className="desktop-nav__mid md:hidden flex justify-center items-center gap-12 ">
            <li>
              <NavLink
                className="underline-gradient "
                to="/"
                style={activeLink}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="underline-gradient "
                to="/Courses"
                style={activeLink}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className="underline-gradient "
                to="/Contact"
                style={activeLink}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className="underline-gradient "
                to="/Help"
                style={activeLink}
              >
                Help
              </NavLink>
            </li>
          </ul>

          <div
            onClick={() => setShowSideMenu(!showSideMenu)}
            className="burger hidden md:block"
          >
            <FontAwesomeIcon
              className="text-3xl hover:scale-110 duration-200 cursor-pointer active:scale-90"
              icon={faBars}
            />
          </div>

          <div className="desktop-nav__right flex justify-end items-center gap-5">
            <button onClick={() => navigate("/signin")} className="sign-in">
              Sign In
            </button>
            <button
              onClick={() => navigate("/register")}
              className="register lg:hidden"
            >
              Register{" "}
            </button>
          </div>
        </nav>
      </div>

      <div
        onClick={() => setShowSideMenu(false)}
        className={`mobile-nav-fixed fixed ${
          showSideMenu
            ? "opacity-100 right-0 pointer-events-auto"
            : "opacity-0 right-20 pointer-events-none"
        } bg-secondary  block top-20 duration-300  bottom-0 w-full h-screen z-50`}
      >
        <ul className="desktop-nav__mid flex w-full h-full flex-col justify-center items-center gap-12">
          <li onClick={() => setShowSideMenu(false)}>
            <NavLink className="underline-gradient " to="/" style={activeLink}>
              Home
            </NavLink>
          </li>
          <li onClick={() => setShowSideMenu(false)}>
            <NavLink
              className="underline-gradient "
              to="/Courses"
              style={activeLink}
            >
              Courses
            </NavLink>
          </li>
          <li onClick={() => setShowSideMenu(false)}>
            <NavLink
              className="underline-gradient "
              to="/Contact"
              style={activeLink}
            >
              Contact
            </NavLink>
          </li>
          <li onClick={() => setShowSideMenu(false)}>
            <NavLink
              className="underline-gradient "
              to="/Help"
              style={activeLink}
            >
              Help
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
