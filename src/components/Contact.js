import { useRef, useState } from "react";
import { BiUserCircle, BiMailSend, BiMessageDetail } from "react-icons/bi";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = () => {
    if (!validateEmail(emailRef.current.value)) setError("Inavlid email");
    else setError("");
  };

  const handleSumbit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <div className="ct">
      <div className="title">Contact</div>
      <form onSubmit={handleSumbit} className="contact-form">
        {error && (
          <div className="alert" role="alert">
            {error}
          </div>
        )}
        <div className="wrapper first-w">
          <div className="f-wrapper">
            <input type="text" spellCheck="false" ref={nameRef} required />
            <div className="label">Name</div>
            <div className="icon">
              <BiUserCircle />
            </div>
          </div>
          <div className="f-wrapper">
            <input type="email" ref={emailRef} required onChange={handleEmailChange} />
            <div className="label">Email</div>
            <div className="icon">
              <BiMailSend />
            </div>
          </div>
        </div>
        <div className="wrapper second-w">
          <div className="f-wrapper w-message">
            <textarea cols="30" rows="10" ref={messageRef} required></textarea>
            <div className="label">Message</div>
            <div className="icon">
              <BiMessageDetail />
            </div>
          </div>
        </div>
        <div className="wrapper third-w">
          <input type="submit" value="Send message" className="contact-btn" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
