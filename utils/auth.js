// Authentication utilities for the frontend

// Store the JWT token in localStorage
export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

// Get the JWT token from localStorage
export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Remove the JWT token from localStorage
export const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};

// Get user info from token (decode JWT without verification)
export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    // Split the token to get the payload part
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = atob(base64);

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

// Check authentication status and return user data if valid
export const checkAuthStatus = async () => {
  const token = getToken();
  if (!token) {
    return null;
  }

  try {
    // Decode the token to get user info
    const userData = getUserFromToken();
    if (!userData) {
      removeToken();
      return null;
    }

    // Check if token is expired
    const currentTime = Math.floor(Date.now() / 1000);
    if (userData.exp && userData.exp < currentTime) {
      removeToken();
      return null;
    }

    // Return user data (we can return just the email as the user info)
    return { email: userData.sub || userData.email };
  } catch (error) {
    console.error('Error checking auth status:', error);
    removeToken();
    return null;
  }
};

// Logout function
export const logout = async () => {
  removeToken();
};