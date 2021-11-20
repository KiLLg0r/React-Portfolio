import { ReactComponent as ReactSVG } from "../assets/react.svg";

const Projects = () => {
  return (
    <>
      <div className="react">
        <div className="svg">
          <h1 className="title">React projects</h1>
          <ReactSVG />
        </div>
        <div className="slider"></div>
      </div>
      <div className="laravel">
        <div className="svg">
          <h1 className="title">React projects</h1>
          <ReactSVG />
        </div>
        <div className="slider"></div>
      </div>
    </>
  );
};

export default Projects;
