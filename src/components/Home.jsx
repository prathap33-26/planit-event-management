import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Home.css";

function Home() {
  /* ── Read logged-in user from localStorage ── */
  const stored = localStorage.getItem("user");
  let userName = null;
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      userName = parsed.name || parsed.username || parsed.email || stored;
    } catch {
      userName = stored;
    }
  }

  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">

      {/* ── Welcome Banner ── */}
      {userName && (
        <div className="welcome-banner">
          <span>Welcome back, <strong>{userName}</strong> — ready to plan something unforgettable?</span>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">PlanIt</p>
          <h1>
            Plan <em>brilliantly.</em><br />Execute flawlessly.
          </h1>
          <p className="hero-subtitle">
            PlanIt brings planners, staff and clients together on one elegant
            platform — from the first idea to the final applause.
          </p>
          <div className="hero-actions">
            <Link to="/events">
              <button className="explore-btn"><span>Explore Events</span></button>
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-card reveal">
            <h2>500+</h2>
            <p>Events Hosted</p>
          </div>
          <div className="stat-card reveal reveal-delay-1">
            <h2>1,200+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card reveal reveal-delay-2">
            <h2>300+</h2>
            <p>Staff Members</p>
          </div>
          <div className="stat-card reveal reveal-delay-3">
            <h2>98%</h2>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features">
        <div className="features-header reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="section-heading">Built for every <span>detail</span></h2>
        </div>
        <div className="feature-grid">
          {[
            { icon: "📅", num: "01", title: "Event Planning", desc: "Create and manage events with precision using our comprehensive planning suite." },
            { icon: "✅", num: "02", title: "Task Management", desc: "Assign, track and complete tasks in real time across your entire team." },
            { icon: "🤝", num: "03", title: "Team Collaboration", desc: "Coordinate seamlessly with staff members for frictionless event execution." },
            { icon: "💬", num: "04", title: "Client Feedback", desc: "Clients stay in the loop and provide feedback through a polished interface." },
          ].map((f, i) => (
            <div className="feature-card reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={i}>
              <span className="feature-number">{f.num}</span>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-it-works">
        <div className="how-it-works-header reveal">
          <span className="section-label">The Process</span>
          <h2 className="section-heading">Three steps to <span>perfection</span></h2>
        </div>
        <div className="steps-grid">
          <div className="step-card reveal">
            <div>
              <div className="step-number"><span>I</span></div>
            </div>
            <div className="step-card-content">
              <h3>Create an Event</h3>
              <p>Set up your event with every detail — date, venue, format and guest expectations.</p>
            </div>
          </div>
          <div className="step-connector">→</div>
          <div className="step-card reveal reveal-delay-1">
            <div>
              <div className="step-number"><span>II</span></div>
            </div>
            <div className="step-card-content">
              <h3>Assign Tasks</h3>
              <p>Break the event into clear tasks and assign them to the right people instantly.</p>
            </div>
          </div>
          <div className="step-connector">→</div>
          <div className="step-card reveal reveal-delay-2">
            <div>
              <div className="step-number"><span>III</span></div>
            </div>
            <div className="step-card-content">
              <h3>Track & Execute</h3>
              <p>Monitor real-time progress, resolve blockers and deliver an exceptional experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="about">
        <div className="about-inner">
          <div className="about-left reveal">
            <span className="section-label">Our Story</span>
            <div className="section-divider" />
            <h2>Where <em>vision</em><br />meets<br />execution.</h2>
          </div>
          <div className="about-right reveal reveal-delay-1">
            <p>
              PlanIt was born from a simple belief — that great events deserve great tools.
              Too many brilliant ideas were lost to miscommunication, missed deadlines and
              scattered spreadsheets.
            </p>
            <p>
              Today, PlanIt is a full-spectrum event management platform trusted by planners
              across India. From intimate boardroom meetings to grand weddings and large-scale
              conferences, every event is handled with the same precision and care.
            </p>
            <p>
              Our platform gives planners end-to-end control, gives staff crystal-clear
              direction, and gives clients the transparency they deserve. The result: events
              that run like clockwork — every time.
            </p>
            <div className="about-highlights">
              {["🏆 Award-winning", "🌍 10+ Cities", "🔒 Secure & Reliable", "⚡ Real-time"].map((h, i) => (
                <span className="highlight" key={i}>{h}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials">
        <div className="testimonials-header reveal">
          <span className="section-label">Client Voices</span>
          <h2 className="section-heading">Heard from the <span>best</span></h2>
        </div>
        <div className="testimonials-grid">
          {[
            { quote: "PlanIt transformed our annual conference. The task tracking feature eliminated hours of back-and-forth. Our team has never been more aligned.", name: "Priya Sharma", role: "HR Manager, TechCorp Hyderabad", avatar: "👩‍💼" },
            { quote: "We used PlanIt for our wedding and it was extraordinary. Every vendor, every detail, perfectly organised in one place. Truly magical.", name: "Ravi & Ananya", role: "Wedding Clients, Bangalore", avatar: "💍" },
            { quote: "The collaboration tools are a genuine game-changer. My clients always know exactly what's happening, and my team is always on the same page.", name: "Mohammed Irfan", role: "Senior Event Planner, Chennai", avatar: "🎯" },
          ].map((t, i) => (
            <div className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
              <p>{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="cta-inner reveal">
          <h2>Your next <em>great event</em><br />starts here.</h2>
          <p>Join thousands of planners who trust PlanIt to turn ambitious visions into flawless realities.</p>
          <div className="cta-buttons">
            <Link to="/events">
              <button className="cta-primary">Get Started</button>
            </Link>
            <Link to="/login">
              <button className="cta-secondary">Sign In</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <span className="footer-brand">PlanIt</span>
            <p>An event management platform for planners, staff and clients who demand excellence.</p>
          </div>
          <div className="footer-section">
            <h3>Navigate</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>support@planit.com</p>
            <p>+91 98765 43210</p>
            <p>Hyderabad, India</p>
          </div>
          <div className="footer-section">
            <h3>Follow</h3>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 PlanIt Event Management System — All Rights Reserved</p>
          <span className="footer-bottom-right">Crafted with precision ✦</span>
        </div>
      </footer>

    </div>
  );
}

export default Home;
