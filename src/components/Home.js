import video from "../assets/video-3.mp4";
import { ReactComponent as HomeSVG } from "../assets/portfolio.svg";
import { BiArrowFromTop } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <video src={video} autoPlay muted></video>
      <div className="overlay"></div>
      <div className="content">
        <div className="wrapper">
          <div className="col col-home-text">
            <h1 className="main-title">The internet is gorgeous!</h1>
            <h3 className="secondary-subtitle">But how do we access it? Not through websites?</h3>
            <h4 className="main-subtitle">Of course and that's why we're here!</h4>
            <a href="#about" className="cta-btn">
              <BiArrowFromTop /> More about us!
            </a>
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
