import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated on client side
    if (typeof window !== 'undefined') {
      if (!isAuthenticated()) {
        // Redirect to login if not authenticated
        router.push('/login');
      }
    }
  }, [router]);

  // If not authenticated, don't render children (redirect will happen)
  if (typeof window !== 'undefined' && !isAuthenticated()) {
    return null; // Or a loading indicator while redirecting
  }

  // If authenticated, render children
  return children;
};

export default ProtectedRoute;