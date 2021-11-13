import logo from "../assets/logo.svg";
import { BiHome, BiFolder, BiInfoCircle, BiMailSend } from "react-icons/bi";
import { useNav } from "../contexts/NavContext";

const Nav = () => {
  const { navLinks } = useNav();

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a className="link logo" href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="right-side">
          <ul className="nav-links">
            <li className={`link home-link ${navLinks["home"] ? "active-link" : ""}`}>
              <a href="#home">
                <BiHome />
                Home
              </a>
            </li>
            <li className={`link about-link ${navLinks["about"] ? "active-link" : ""}`}>
              <a href="#about">
                <BiInfoCircle />
                About
              </a>
            </li>
            <li className={`link projects-link ${navLinks["projects"] ? "active-link" : ""}`}>
              <a href="#projects">
                <BiFolder />
                Projects
              </a>
            </li>
            <li className={`link contact-link ${navLinks["contact"] ? "active-link" : ""}`}>
              <a href="#contact">
                <BiMailSend />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
