import "../../styles/app.css";

const Index = () => (
  <div className="footer-container">
    <div className="info-container">
      <span>
        <i className="fab fa-viber"></i>+63 9553 205 870
      </span>
      <span>
        <i className="fas fa-envelope"></i> jsera46@gmail.com
      </span>
    </div>
    <div className="social-media-container">
      <span className="social-media">Social Media</span>
      <div className="links-container">
        <a href="https://github.com/jsera46" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jamar-usman-00a098234/"
          target="_blank="
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/jamarusman10"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/jamar_usman"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <span className="copy-right">
        Copy Right &copy;2022 | All rights reserved
      </span>
    </div>
    <div className="contact-container">
      <span>Stay in touch!</span>
      <div>
        <input type="text" placeholder="email" />
        <button>Send</button>
      </div>
    </div>
  </div>
);

export default Index;
