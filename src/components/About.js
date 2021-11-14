import { ReactComponent as CodeSVG } from "../assets/code.svg";
import { ReactComponent as PersonSVG } from "../assets/person.svg";
import { ReactComponent as HiringSVG } from "../assets/hiring.svg";

const About = () => {
  return (
    <>
      <div className="wrapper">
        <div className="col">
          <div className="card custom-border border-1">
            <div className="text">
              <div className="icon">
                <CodeSVG />
              </div>
              <div className="title">What I do?</div>
              <div className="shortDesc"></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card custom-border border-2">
            <div className="text">
              <div className="icon">
                <PersonSVG />
              </div>
              <div className="title">Who am I?</div>
              <div className="shortDesc"></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card custom-border border-3">
            <div className="text">
              <div className="icon">
                <HiringSVG />
              </div>
              <div className="title">Why hire me?</div>
              <div className="shortDesc"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
