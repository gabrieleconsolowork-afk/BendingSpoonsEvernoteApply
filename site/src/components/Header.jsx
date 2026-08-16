import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav nav-upgrade" aria-label="Primary">
        <Link className="logo" to="/" aria-label="Evernote">
          <img src="/assets/logos/evernote-logo.svg" alt="Evernote" width="176" height="43" />
        </Link>
        <a className="btn btn-green btn-nav" href="#plans">
          Upgrade now
        </a>
      </nav>
    </header>
  );
}
