// API client utilities for the frontend

// Base API URL - can be configured via environment variables
// Using NEXT_PUBLIC_API_URL environment variable for backend API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Generic API request function with authentication
const apiRequest = async (endpoint, options = {}) => {
  // Validate that API_BASE_URL is defined at runtime
  if (!API_BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_URL environment variable must be set');
  }

  const url = `${API_BASE_URL}${endpoint}`;

  // Get token from auth utility
  const { getToken } = await import('./auth'); // Dynamic import to avoid SSR issues
  const token = getToken();

  // Set default headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add authorization header if token exists
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Prepare request options
  const requestOptions = {
    headers,
    ...options,
  };

  // Make the request
  const response = await fetch(url, requestOptions);

  // Check if response is ok (status 2xx)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `HTTP error! Status: ${response.status}`);
  }

  // Return response data
  return response.json();
};

// Authentication API functions
export const authAPI = {
  // Signup a new user
  signup: async (email, password) => {
    return apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // Login user
  login: async (email, password) => {
    // For login, we use a different approach since it doesn't require auth token
    const url = `${API_BASE_URL}/auth/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! Status: ${response.status}`);
    }

    return response.json();
  },
};

// Todo API functions
export const todoAPI = {
  // Get all todos for the current user
  getTodos: async () => {
    return apiRequest('/todos');
  },

  // Create a new todo
  createTodo: async (title, description = '') => {
    return apiRequest('/todos', {
      method: 'POST',
      body: JSON.stringify({ title, description, completed: false }),
    });
  },

  // Update a todo
  updateTodo: async (id, updates) => {
    return apiRequest(`/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },

  // Delete a todo
  deleteTodo: async (id) => {
    return apiRequest(`/todos/${id}`, {
      method: 'DELETE',
    });
  },

  // Toggle todo completion status
  toggleTodo: async (id) => {
    return apiRequest(`/todos/${id}/toggle`, {
      method: 'PATCH',
    });
  },
};