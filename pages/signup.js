import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { authAPI } from '../utils/api';

export default function Signup() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      // Call signup API
      await authAPI.signup(email, password);

      // Redirect to login after successful signup
      router.push('/login');
    } catch (err) {
      setError(err.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Sign Up - Todo App</title>
        <meta name="description" content="Create an account for Todo App" />
      </Head>

      <main>
        <h1 className="title">Sign Up</h1>

        {error && <div className="error">{error}</div>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required minLength="8" />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="login-link">
          Already have an account?{' '}
          <Link href="/login">
            Log in
          </Link>
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
        }

        .signup-form {
          width: 100%;
          max-width: 400px;
          padding: 2rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin-top: 2rem;
        }

        .input-group {
          margin-bottom: 1rem;
        }

        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .input-group input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }

        button:hover {
          background-color: #0060e0;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .error {
          color: #e74c3c;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #e74c3c;
          border-radius: 4px;
          background-color: #fdeded;
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .login-link {
          margin-top: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}