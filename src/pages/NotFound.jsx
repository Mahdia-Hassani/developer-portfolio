import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>Sorry, the page you are looking for doesn't exist.</p>

        <Link to="/" className="navbar-btn">
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
