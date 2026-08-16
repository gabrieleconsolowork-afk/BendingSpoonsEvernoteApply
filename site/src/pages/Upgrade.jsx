import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Star = ({ half = false }) => (
  <svg viewBox="0 0 20 20" width="16" height="16">
    {half ? (
      <>
        <defs>
          <linearGradient id="starHalf">
            <stop offset="60%" stopColor="#00A82D" />
            <stop offset="60%" stopColor="#E7E7E7" />
          </linearGradient>
        </defs>
        <path
          fill="url(#starHalf)"
          d="M10 1.5l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.2 5 16.9l.9-5.6-4-3.9 5.6-.8z"
        />
      </>
    ) : (
      <path
        fill="#00A82D"
        d="M10 1.5l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.2 5 16.9l.9-5.6-4-3.9 5.6-.8z"
      />
    )}
  </svg>
);

const Check = () => <img src="/assets/icons/check.svg" alt="" width="20" height="20" />;

export default function Upgrade() {
  useEffect(() => {
    document.title = "Concept Design";
    document.body.classList.add("upgrade");
    return () => document.body.classList.remove("upgrade");
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <section className="up-hero">
          <div className="hero-card">
            <div className="up-hero-inner">
            <h1>
              <span className="up-hero-line">You've been organized for years.</span>
              <span className="up-hero-accent">Time Evernote kept up.</span>
            </h1>
            <p className="lede">
              You use Evernote every day. Free was the right place to start. But your needs have
              outgrown it and you've felt it.
            </p>
            <ul className="up-proof" aria-label="Social proof">
              <li>
                <span className="up-stars" aria-hidden="true">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star half />
                </span>
                <span>4.6 / 5 on the App Store</span>
              </li>
              <li>250M+ registered users</li>
              <li>Trusted since 2008</li>
            </ul>
            <a className="btn btn-green btn-lg" href="#">
              Upgrade to Personal - €7.99/mo
            </a>
            <p className="up-note">Cancel anytime. No commitment.</p>
            <a className="up-text-link" href="#plans">
              Compare all plans
            </a>
            </div>
            <div className="up-hero-visual">
              <video
                className="up-hero-video-desktop"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/images/upgrade-hero.svg"
                width="1113"
                height="534"
                aria-label="Evernote product preview"
              >
                <source src="/assets/assets/Frame 1.webm" type="video/webm" />
              </video>
              <video
                className="up-hero-video-mobile"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/assets/Frame 1 mobile poster.jpg"
                width="1920"
                height="1548"
                aria-label="Evernote product preview"
              >
                <source src="/assets/assets/Frame 1 mobile.mp4" type="video/mp4" />
                <source src="/assets/assets/Frame 1 mobile.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </section>

        <section className="up-pain" id="limits">
          <div className="wrap-narrow">
            <h2>Three moments you've felt the limit</h2>
            <div className="up-pain-grid">
              <article className="up-card">
                <div className="up-icon" aria-hidden="true">
                  <span className="up-icon-shape" />
                </div>
                <h3>You needed a note on your phone. It wasn't there.</h3>
                <p>
                  You wrote it on your laptop. You're now on your phone. Free only syncs one device, so the note stayed
                  behind.
                </p>
                <span className="up-limit">Free: 1 device synced</span>
              </article>
              <article className="up-card">
                <div className="up-icon" aria-hidden="true">
                  <span className="up-icon-shape" />
                </div>
                <h3>
                  You tried to attach a file.
                  <br />
                  It wouldn't go through.
                </h3>
                <p>
                  The PDF was 30 MB. The 25 MB limit stopped it. You had to send it by email and lose the context.
                </p>
                <span className="up-limit">Free: 25 MB note size limit</span>
              </article>
              <article className="up-card">
                <div className="up-icon" aria-hidden="true">
                  <span className="up-icon-shape" />
                </div>
                <h3>You were offline and couldn't access anything.</h3>
                <p>
                  On a flight, in the subway, in a meeting with bad signal. Your notes were there in theory. Not in
                  practice.
                </p>
                <span className="up-limit">Free: no offline access</span>
              </article>
            </div>
          </div>
        </section>

        <section className="up-bridge" aria-label="Transition">
          <div className="up-bridge-inner">
            <h2>These aren't edge cases. They're your average Tuesday.</h2>
            <p>Every day you stay on Free, you're working around your own tool. That's time and focus you won't get back.</p>
            <a className="btn btn-lime btn-lg" href="#after">
              Learn more
            </a>
          </div>
        </section>

        <section className="up-benefit" id="after">
          <div className="wrap">
            <h2>How those same moments change</h2>
            <div className="up-benefit-list">
              <article className="up-split-card">
                <div className="up-split-copy">
                  <div className="up-split-head">
                    <h3>
                      Notes that follow
                      <br />
                      you everywhere
                    </h3>
                  </div>
                  <div className="up-compare">
                    <div className="up-before">
                      <span className="up-col-label">Before</span>
                      <p>Open your laptop to find the note<br />you just wrote on your phone.</p>
                    </div>
                    <div className="up-after">
                      <span className="up-col-label">After</span>
                      <p>Unlimited devices. Every note,<br />everywhere, always in sync.</p>
                    </div>
                  </div>
                </div>
                <figure className="up-split-visual">
                  <img
                    className="up-split-bg"
                    src="/assets/assets/After the upgrade/1 card/background 1 card.svg?v=2"
                    alt=""
                    width="267"
                    height="267"
                  />
                  <img
                    className="up-split-art"
                    src="/assets/assets/After the upgrade/1 card/immagine 1 card.png?v=3"
                    alt="A note synced across phone and laptop"
                    width="754"
                    height="661"
                  />
                </figure>
              </article>
              <article className="up-split-card up-split-card-flip">
                <div className="up-split-copy">
                  <div className="up-split-head">
                    <h3>Notes big enough<br />for real work</h3>
                  </div>
                  <div className="up-compare">
                    <div className="up-before">
                      <span className="up-col-label">Before</span>
                      <p>Compress files, split attachments,<br />lose context.</p>
                    </div>
                    <div className="up-after">
                      <span className="up-col-label">After</span>
                      <p>
                        200 MB per note. Full PDFs, images,
                        <br />
                        documents, no workarounds.
                      </p>
                    </div>
                  </div>
                </div>
                <figure className="up-split-visual">
                  <img
                    className="up-split-bg"
                    src="/assets/assets/After the upgrade/2 card/background 2 card.svg?v=2"
                    alt=""
                    width="266"
                    height="266"
                  />
                  <img
                    className="up-split-art"
                    src="/assets/assets/After the upgrade/2 card/immagine 2 card.png?v=4"
                    alt="A note with large PDF, spreadsheet, and document attachments"
                    width="759"
                    height="662"
                  />
                </figure>
              </article>
              <article className="up-split-card">
                <div className="up-split-copy">
                  <div className="up-split-head">
                    <h3>Notes that work<br />without signal</h3>
                  </div>
                  <div className="up-compare">
                    <div className="up-before">
                      <span className="up-col-label">Before</span>
                      <p>Offline means inaccessible. Hope<br />you remembered to screenshot.</p>
                    </div>
                    <div className="up-after">
                      <span className="up-col-label">After</span>
                      <p>Full offline access. Plane, subway,<br />basement, always there.</p>
                    </div>
                  </div>
                </div>
                <figure className="up-split-visual">
                  <img
                    className="up-split-bg"
                    src="/assets/assets/After the upgrade/3 card/background 3 card.svg?v=2"
                    alt=""
                    width="266"
                    height="266"
                  />
                  <img
                    className="up-split-art"
                    src="/assets/assets/After the upgrade/3 card/immagine 3 card.png?v=3"
                    alt="A note available offline on a phone, even without signal"
                    width="752"
                    height="661"
                  />
                </figure>
              </article>
            </div>
          </div>
        </section>

        <section className="up-trust" id="trust">
          <div className="wrap-narrow">
            <div className="up-trust-grid">
              <div className="up-trust-card">
                <img className="up-trust-bg" src="/assets/assets/stats/1.svg" alt="" width="112" height="112" />
                <div className="up-icon" aria-hidden="true">
                  <img src="/assets/icons/calendar.svg" alt="" width="40" height="40" />
                </div>
                <p className="up-metric">16+</p>
                <p>years helping people capture and organize what matters</p>
              </div>
              <div className="up-trust-card">
                <img className="up-trust-bg" src="/assets/assets/stats/2.svg" alt="" width="112" height="112" />
                <div className="up-icon" aria-hidden="true">
                  <img src="/assets/icons/collaborate.svg" alt="" width="40" height="40" />
                </div>
                <p className="up-metric">150+</p>
                <p>countries where people rely on Evernote every day</p>
              </div>
              <div className="up-trust-card">
                <img className="up-trust-bg" src="/assets/assets/stats/3.svg" alt="" width="112" height="112" />
                <div className="up-icon" aria-hidden="true">
                  <img src="/assets/icons/notebook.svg" alt="" width="40" height="40" />
                </div>
                <p className="up-metric">#1</p>
                <p>note-taking app in the App Store across multiple categories</p>
              </div>
            </div>
          </div>
        </section>

        <section className="up-plans" id="plans">
          <div className="wrap-narrow">
            <p className="up-kicker">Choose your plan</p>
            <h2>Pick the one that fits</h2>
            <div className="up-plan-grid">
              <article className="up-plan up-plan-popular">
                <span className="up-popular">Most popular</span>
                <h3>Personal</h3>
                <p className="up-price">
                  €7.99<span>/mo</span>
                </p>
                <p className="up-audience">For individuals</p>
                <p className="up-guarantee">Cancel anytime</p>
                <ul className="up-features">
                  <li>
                    <Check /> Unlimited devices
                  </li>
                  <li>
                    <Check /> 100 GB monthly upload
                  </li>
                  <li>
                    <Check /> 200 MB note size
                  </li>
                  <li>
                    <Check /> Offline access
                  </li>
                  <li>
                    <Check /> AI-powered search
                  </li>
                  <li>
                    <Check /> PDF annotation
                  </li>
                  <li>
                    <Check /> Full tasks and reminders
                  </li>
                </ul>
                <a className="btn btn-green btn-lg btn-block" href="#">
                  Upgrade to Personal
                </a>
              </article>
              <article className="up-plan">
                <h3>Professional</h3>
                <p className="up-price">
                  €14.99<span>/mo/seat</span>
                </p>
                <p className="up-audience">For teams</p>
                <p className="up-guarantee">Cancel anytime</p>
                <ul className="up-features">
                  <li>
                    <Check /> Everything in Personal
                  </li>
                  <li>
                    <Check /> 2 TB monthly upload
                  </li>
                  <li>
                    <Check /> 500 MB note size
                  </li>
                  <li>
                    <Check /> Team collaboration
                  </li>
                  <li>
                    <Check /> Admin and user management
                  </li>
                </ul>
                <a className="btn btn-green-outline btn-lg btn-block" href="#">
                  Upgrade to Professional
                </a>
              </article>
            </div>
            <p className="up-anchor">
              <span className="up-coffee" aria-hidden="true" />
              Personal costs less than a coffee a week. Your notes are worth more than that.
            </p>
          </div>
        </section>

        <section className="up-final">
          <div className="up-final-inner">
            <h2>You've earned a better tool.</h2>
            <p>The Free plan was the start. Personal is the one that matches how you already work.</p>
            <a className="btn btn-green btn-lg" href="#">
              Upgrade to Personal - €7.99/mo
            </a>
            <p className="up-note">Cancel anytime. No commitment.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
