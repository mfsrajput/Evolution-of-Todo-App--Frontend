import Head from 'next/head';
import Link from 'next/link';
import { isAuthenticated, removeToken } from '../utils/auth';
import { useRouter } from 'next/router';
import styles from './Layout.module.css';

const Layout = ({ children, title = 'Todo App' }) => {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Todo application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" legacyBehavior>
            <a className={styles.logo}>Todo App</a>
          </Link>

          <div className={styles.navLinks}>
            {isAuthenticated() ? (
              <>
                <Link href="/dashboard" legacyBehavior>
                  <a className={router.pathname === '/dashboard' ? styles.active : ''}>Dashboard</a>
                </Link>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" legacyBehavior>
                  <a className={router.pathname === '/login' ? styles.active : ''}>Login</a>
                </Link>
                <Link href="/signup" legacyBehavior>
                  <a className={router.pathname === '/signup' ? styles.active : ''}>Sign Up</a>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Todo App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;