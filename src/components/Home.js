import video from "../assets/video-2.mp4";
import { ReactComponent as HomeSVG } from "../assets/portfolio.svg";
import { BiArrowFromTop, BiMailSend } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <video src={video} autoPlay muted></video>
      <div className="overlay"></div>
      <div className="content">
        <div className="wrapper">
          <div className="col col-home-text">
            <h1 className="main-title">
              Hi! I'm Rob, a <span>&lt;WebDev /&gt;</span> !
            </h1>
            <h3 className="secondary-subtitle">
              The internet is gorgeous! But how do we access it? Not through websites?
            </h3>
            <h4 className="main-subtitle">Of course we do and that's why I'm here!</h4>
            <div className="btn-group">
              <a href="#contact" className="cta-btn btn">
                <BiMailSend /> Get in touch
              </a>
              <a href="#about" className="secondary-btn btn">
                <BiArrowFromTop /> More about me
              </a>
            </div>
          </div>
          <div className="col col-home-svg">
            <HomeSVG />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
