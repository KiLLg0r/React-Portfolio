import logo from "../assets/logo.svg";
import { BiHome, BiFolder, BiInfoCircle, BiMailSend, BiMenu } from "react-icons/bi";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { useNav } from "../contexts/NavContext";
import { useState, useEffect } from "react";

const Nav = () => {
  const { navLinks } = useNav();
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(true);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const updateMenu = (e) => {
    if (width <= 720) {
      if (menu) setMenu(false);
      else setMenu(true);
    }
  };

  const Menu = () => {
    if (menu) return <BiMenu className="hamburgerMenu" />;
    else return <AiOutlineClose className="hamburgerMenu" />;
  };

  useEffect(() => {
    window.onresize = updateWidth;
  });

  return (
    <header>
      <nav className={`navbar ${width <= 720 ? "mobile" : "desktop"}`}>
        <div className="logo-menu">
          <div className="logo">
            <a className="link logo-link" href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="menu" onClick={updateMenu}>
            <Menu />
          </div>
        </div>
        <ul className={`nav-links ${menu ? "closed" : "open"}`}>
          <div className="left-side">
            <li
              className={`link home-link ${navLinks["home"] && width > 720 ? "active-link" : ""}`}
              onClick={updateMenu}
            >
              <a href="#home">
                <BiHome />
                Home
              </a>
            </li>
            <li
              className={`link about-link ${navLinks["about"] && width > 720 ? "active-link" : ""}`}
              onClick={updateMenu}
            >
              <a href="#about">
                <BiInfoCircle />
                About
              </a>
            </li>
            <li
              className={`link projects-link ${navLinks["projects"] && width > 720 ? "active-link" : ""}`}
              onClick={updateMenu}
            >
              <a href="#projects">
                <BiFolder />
                Projects
              </a>
            </li>
            <li
              className={`link contact-link ${navLinks["contact"] && width > 720 ? "active-link" : ""}`}
              onClick={updateMenu}
            >
              <a href="#contact">
                <BiMailSend />
                Contact
              </a>
            </li>
          </div>
          <div className="right-side">
            <li className="link github-link">
              <a href="https://github.com/KiLLg0r" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="link instagram-link">
              <a href="https://www.instagram.com/rob.oblesniuc/" target="_blank" rel="noreferrer">
                <AiFillInstagram />
              </a>
            </li>
            <li className="link linkedin-link">
              <a href="https://www.linkedin.com/in/robert-andrei-oblesniuc-42a7281b8/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
