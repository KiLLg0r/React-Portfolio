import React, { useContext, useState } from "react";

const NavContext = React.createContext();

export function useNav() {
  return useContext(NavContext);
}

export function NavProvider({ children }) {
  const [navLinks, setNavLinks] = useState({ home: true, about: false, projects: false, contact: false });

  const options = {
    threshold: 0.5,
  };

  function findTrueVal(obj) {
    for (let key in obj) {
      if (obj[key] === true) {
        return key;
      }
    }
  }

  const value = {
    navLinks,
    setNavLinks,
    options,
    findTrueVal,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
