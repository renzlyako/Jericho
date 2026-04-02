export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://cdn.codia.ai/figma/IhFhVzCGY78tgK0uTohkSp/img-1deafa05d4eeda5e.svg"
            alt="Wildlife Logo"
            className="footer-logo"
          />
          <div className="footer-contact">
            <p className="footer-address-label">Address:</p>
            <p>Sta Rita Caliao Nueva Ecija purok 3</p>
            <br />
            <p className="footer-contact-label">Contact:</p>
            <p>(800) 555-1043</p>
            <p>animalsanctuary77@gmail.com</p>
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="social-icon">f</a>
            <a href="#" aria-label="Instagram" className="social-icon">in</a>
            <a href="#" aria-label="Twitter" className="social-icon">t</a>
            <a href="#" aria-label="YouTube" className="social-icon">yt</a>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-links-col">
            <a href="#">About Us</a>
            <a href="#">Products</a>
            <a href="#">Customer Support</a>
            <a href="#">FAQs</a>
          </div>
          <div className="footer-links-col">
            <a href="#">Testimonials</a>
            <a href="#">Contact Us</a>
            <a href="#">Return Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">&copy; 2026 wildnest. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
