export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#" className="nav-link active">Home Page</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Products</a>
      </div>
      <div className="navbar-logo">
        <img
          src="https://cdn.codia.ai/figma/IhFhVzCGY78tgK0uTohkSp/img-1deafa05d4eeda5e.svg"
          alt="Wildlife Logo"
          className="logo-img"
        />
      </div>
      <button className="signup-btn">Sign Up</button>
    </nav>
  );
}
