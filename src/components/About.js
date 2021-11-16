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
              <div className="desc">
                I create <span>web applications, websites and UX/UI designs</span>. My portfolio contains both{" "}
                <span>static and fullstack</span> sites (including databases and back-end for them) and{" "}
                <span>Android</span> applications based on web technology. I use frameworks like{" "}
                <span>React and Laravel</span>.
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card custom-border border-2">
            <div className="text">
              <div className="icon">
                <PersonSVG />
              </div>
              <div className="title">About myself</div>
              <div className="desc">
                Hello! I'm <span>Rob</span>. I am here to help you leave your customers <span>speechless</span> who will
                come to <span>your site</span>. I am a passionate programming student who <span>3 years ago</span>{" "}
                discovered web development and has been practicing it ever since,{" "}
                <span>improving his skills daily</span>.
              </div>
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
              <div className="desc">
                Well, there are <span>many reasons</span>. The most important thing would be that I have
                <span> patience</span> with the clients and I <span>focus</span> more on what <span>they need</span>.
                How many times has the developer <span>failed</span> to do what the client wants? Another reason would
                be the <span>perseverance and dedication</span> with which I dedicate myself to a project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
