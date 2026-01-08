import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { checkAuthStatus, logout } from '../utils/auth';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0); // State to trigger refresh

  useEffect(() => {
    const verifyAuth = async () => {
      const userData = await checkAuthStatus();
      if (!userData) {
        router.push('/login');
      } else {
        setUser(userData);
      }
    };

    verifyAuth();
  }, [router]);

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const handleAddTodo = (newTodo) => {
    // Trigger a refresh of the todo list
    setRefreshTrigger(prev => prev + 1);
    setIsEditing(null);
  };

  const handleUpdateTodo = (updatedTodo) => {
    // Trigger a refresh of the todo list
    setRefreshTrigger(prev => prev + 1);
    setIsEditing(null);
  };

  const handleEditClick = (todo) => {
    setIsEditing(todo);
  };

  if (!user) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard - Todo App</title>
        <meta name="description" content="Your Todo Dashboard" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Todo Dashboard</h1>
        <div className={styles.userSection}>
          <span className={styles.userEmail}>Welcome, {user.email}</span>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      </header>

      {error && <div className={styles.error}>{error}</div>}

      <main className={styles.main}>
        <section className={styles.formSection}>
          <TodoForm
            onAddTodo={handleAddTodo}
            onUpdateTodo={handleUpdateTodo}
            initialData={isEditing}
          />
        </section>

        <section className={styles.listSection}>
          <TodoList
            key={refreshTrigger} // This will cause TodoList to re-render when refreshTrigger changes
            onEditTodo={handleEditClick}
            onTodoUpdated={handleUpdateTodo}
          />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;