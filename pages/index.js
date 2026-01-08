import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="landing-page">
      <Head>
        <title>TaskFlow - Modern Todo Management</title>
        <meta name="description" content="Streamline your productivity with our modern todo application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>TaskFlow</h1>
          </div>
          <nav className="nav">
            <Link href="/login" className="nav-link">
              Login
            </Link>
            <Link href="/signup" className="nav-button">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Transform Your Productivity</h1>
            <p className="hero-subtitle">
              Experience the most intuitive way to manage your tasks. Stay organized, focused, and achieve more with our modern todo application.
            </p>
            <div className="hero-buttons">
              <Link href="/signup" className="cta-button primary">
                Start Trial
              </Link>
              <Link href="/login" className="cta-button secondary">
                Sign In
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="mockup">
              <div className="mockup-header">
                <div className="mockup-dot red"></div>
                <div className="mockup-dot yellow"></div>
                <div className="mockup-dot green"></div>
              </div>
              <div className="mockup-content">
                <div className="mockup-todo">
                  <div className="mockup-checkbox"></div>
                  <div className="mockup-text">Complete project proposal</div>
                  <div className="mockup-status pending">Pending</div>
                </div>
                <div className="mockup-todo completed">
                  <div className="mockup-checkbox checked"></div>
                  <div className="mockup-text">Review team feedback</div>
                  <div className="mockup-status completed">Done</div>
                </div>
                <div className="mockup-todo">
                  <div className="mockup-checkbox"></div>
                  <div className="mockup-text">Prepare presentation</div>
                  <div className="mockup-status pending">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need to stay organized and productive</p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3 className="feature-title">Task Management</h3>
              <p className="feature-description">Create, organize, and prioritize your tasks with ease</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure Authentication</h3>
              <p className="feature-description">Enterprise-grade security to protect your data</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Responsive Design</h3>
              <p className="feature-description">Access your tasks from any device, anywhere</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">Real-time Updates</h3>
              <p className="feature-description">See changes instantly across all your devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Transform Your Productivity?</h2>
          <p className="cta-subtitle">Join thousands of users who have revolutionized their task management</p>
          <div className="cta-buttons">
            <Link href="/signup" className="cta-button primary large">
              Get Started Free
            </Link>
            <Link href="/login" className="cta-button secondary large">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>TaskFlow</h3>
              <p>The modern way to manage your tasks and boost productivity.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link href="/signup">Sign Up</Link>
              <Link href="/login">Login</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --primary-color: #6366f1;
          --primary-hover: #4f46e5;
          --secondary-color: #f8fafc;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --background: #ffffff;
          --card-background: #ffffff;
          --border-color: #e2e8f0;
          --success-color: #10b981;
          --warning-color: #f59e0b;
          --danger-color: #ef4444;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: var(--text-primary);
          background-color: var(--background);
        }

        .landing-page {
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header Styles */
        .header {
          padding: 1rem 0;
          background-color: var(--background);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo h1 {
          color: var(--primary-color);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          background-color: var(--secondary-color);
        }

        .nav-button {
          display: inline-block;
          background-color: var(--primary-color);
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .nav-button:hover {
          background-color: var(--primary-hover);
        }

        /* Hero Section */
        .hero {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }

        .hero .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.2s ease;
          border: 2px solid transparent;
          cursor: pointer;
        }

        .cta-button.primary {
          background-color: var(--primary-color);
          color: white;
        }

        .cta-button.primary:hover {
          background-color: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        .cta-button.secondary {
          background-color: transparent;
          color: var(--primary-color);
          border-color: var(--primary-color);
        }

        .cta-button.secondary:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-2px);
        }

        /* Mockup Styles */
        .mockup {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-color);
        }

        .mockup-header {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .mockup-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .mockup-dot.red { background-color: #ef4444; }
        .mockup-dot.yellow { background-color: #f59e0b; }
        .mockup-dot.green { background-color: #10b981; }

        .mockup-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mockup-todo {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: 0.5rem;
          background-color: var(--secondary-color);
          transition: all 0.2s ease;
        }

        .mockup-todo:hover {
          background-color: #f1f5f9;
        }

        .mockup-todo.completed {
          opacity: 0.7;
        }

        .mockup-checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid var(--border-color);
          border-radius: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mockup-checkbox.checked::after {
          content: '✓';
          color: var(--success-color);
          font-size: 0.75rem;
        }

        .mockup-text {
          flex: 1;
          font-size: 0.875rem;
        }

        .mockup-todo.completed .mockup-text {
          text-decoration: line-through;
          color: var(--text-secondary);
        }

        .mockup-status {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-weight: 500;
        }

        .mockup-status.pending {
          background-color: #fef3c7;
          color: #f59e0b;
        }

        .mockup-status.completed {
          background-color: #d1fae5;
          color: #10b981;
        }

        /* Features Section */
        .features {
          padding: 6rem 0;
          background-color: var(--background);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .section-subtitle {
          font-size: 1.25rem;
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: var(--card-background);
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: var(--primary-color);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--primary-color) 0%, #8b5cf6 100%);
          color: white;
          text-align: center;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button.large {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
        }

        .cta-button.large.primary {
          background-color: white;
          color: var(--primary-color);
        }

        .cta-button.large.primary:hover {
          background-color: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }

        .cta-button.large.secondary {
          background-color: transparent;
          color: white;
          border-color: white;
        }

        .cta-button.large.secondary:hover {
          background-color: white;
          color: var(--primary-color);
        }

        /* Footer */
        .footer {
          background-color: var(--card-background);
          border-top: 1px solid var(--border-color);
          padding: 3rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .footer-section h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .footer-section p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .footer-section a {
          display: block;
          color: var(--text-secondary);
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.2s ease;
        }

        .footer-section a:hover {
          color: var(--primary-color);
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          text-align: center;
          color: var(--text-secondary);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero .container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .nav {
            gap: 0.5rem;
          }

          .nav-button, .nav-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .cta-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}