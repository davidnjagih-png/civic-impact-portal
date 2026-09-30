import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Hon. Duncan M. Mathenge. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
