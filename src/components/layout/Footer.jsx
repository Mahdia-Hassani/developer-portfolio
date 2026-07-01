import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* name + Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} Mahdia Hassani
        </p>

        {/* Social links */}
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
