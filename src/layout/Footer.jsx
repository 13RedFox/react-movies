function Footer() {
  return (
    <footer className="page-footer cyan lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} React Movies App
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/13RedFox/react-movies"
            target="_blank"
            rel="noreferrer">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
