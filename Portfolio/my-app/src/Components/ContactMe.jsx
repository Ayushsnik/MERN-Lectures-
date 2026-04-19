import "./ContactMe.css";
import { FaInstagram, FaTwitter, FaHashtag, FaYoutube, FaGithub } from "react-icons/fa"; // Use FaHashtag instead

function ContactMe() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Me</h1>
        <p>Have a question or want to collaborate? Feel free to reach out!</p>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea placeholder="Type your message here"></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com/ayushsnik/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.threads.net/@yourprofile" target="_blank" rel="noopener noreferrer">
            <FaHashtag />  {/* Using FaHashtag instead of FaThreads */}
          </a>
          <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
