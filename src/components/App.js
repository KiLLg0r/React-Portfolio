// Components
import Nav from "./Nav";
import Sections from "./Sections";
import { NavProvider } from "../contexts/NavContext";

// Styles
import "../style/main.css";

const App = () => {
  return (
    <NavProvider>
      <Nav />
      <Sections />
    </NavProvider>
  );
};

export default App;
