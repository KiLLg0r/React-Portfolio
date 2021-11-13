import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { useNav } from "../contexts/NavContext";
import { useEffect } from "react";

const Sections = () => {
  const { navLinks, setNavLinks, findTrueVal, options } = useNav();

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.id;
          if (navLinks[section] === false) {
            const trueVal = findTrueVal(navLinks);
            setNavLinks((navLinks) => ({
              ...navLinks,
              [trueVal]: false,
            }));
            setNavLinks((navLinks) => ({
              ...navLinks,
              [section]: true,
            }));
          }
        }
      });
    }, options);
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  });

  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Sections;
