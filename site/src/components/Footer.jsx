import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <Link className="footer-logo" to="/" aria-label="Evernote">
            <img src="/assets/logos/evernote-logo-footer.svg" alt="Evernote" width="145" height="36" />
          </Link>
          <div className="footer-top-rest">
            <div className="social">
              <a href="#" aria-label="Facebook">
                <img src="/assets/social/facebook.svg" alt="" width="20" height="20" />
              </a>
              <a href="#" aria-label="X">
                <img src="/assets/social/x.svg" alt="" width="20" height="20" />
              </a>
              <a href="#" aria-label="Medium">
                <img src="/assets/social/medium.svg" alt="" width="20" height="20" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/assets/social/instagram.svg" alt="" width="20" height="20" />
              </a>
              <a href="#" aria-label="YouTube">
                <img src="/assets/social/youtube.svg" alt="" width="20" height="20" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-cols">
          <div>
            <h6>Solutions</h6>
            <ul>
              <li>
                <Link to="/">Why Evernote</Link>
              </li>
              <li>
                <a href="/#features">Note taking</a>
              </li>
              <li>
                <a href="/#organize">Self organization</a>
              </li>
              <li>
                <a href="/#features">Productivity</a>
              </li>
              <li>
                <a href="/#footer">Enterprise</a>
              </li>
              <li>
                <Link to="/">Students</Link>
              </li>
              <li>
                <a href="#plans">Compare plans</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Explore</h6>
            <ul>
              <li>
                <a href="/#ai">AI features</a>
              </li>
              <li>
                <a href="/#share">Collaboration</a>
              </li>
              <li>
                <a href="/#capture">Web Clipper</a>
              </li>
              <li>
                <a href="/#recall">Advanced search</a>
              </li>
              <li>
                <a href="/#download">Document scanning</a>
              </li>
              <li>
                <Link to="/">Personalization</Link>
              </li>
              <li>
                <a href="/#features">Calendar</a>
              </li>
              <li>
                <a href="/#features">Tasks</a>
              </li>
              <li>
                <a href="/#download">Integrations</a>
              </li>
              <li>
                <Link to="/">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6>Resources</h6>
            <ul>
              <li>
                <a href="#">Evernote news</a>
              </li>
              <li>
                <a href="/#v11">Product Updates</a>
              </li>
              <li>
                <a href="#">Release Notes</a>
              </li>
              <li>
                <a href="#">Help &amp; learning</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Forum</a>
              </li>
              <li>
                <a href="#">Find an Expert</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">About Bending Spoons</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Get Started</h6>
            <ul>
              <li>
                <a href="/#signup">Sign up for free</a>
              </li>
              <li>
                <a href="/#login">Log in</a>
              </li>
              <li>
                <a href="/#download">Download</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Bending Spoons US Inc. All rights reserved.</p>
          <div className="legal">
            <a href="#">Cookie Preferences</a>
            <a href="#">Security</a>
            <a href="#">Legal</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
