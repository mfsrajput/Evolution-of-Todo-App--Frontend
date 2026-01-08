import { useState, useEffect } from 'react';
import { todoAPI } from '../utils/api';
import styles from './TodoList.module.css';

const TodoList = ({ onEditTodo, onTodoUpdated }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await todoAPI.getTodos();
      setTodos(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  
  const toggleTodo = async (id) => {
    try {
      const updatedTodo = await todoAPI.toggleTodo(id);
      setTodos(todos.map(todo =>
        todo.id === id ? updatedTodo : todo
      ));
      // Notify parent if provided
      if (onTodoUpdated) {
        onTodoUpdated(updatedTodo);
      }
    } catch (err) {
      setError(err.message || 'Failed to toggle todo');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoAPI.deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete todo');
    }
  };

  const handleEditClick = (todo) => {
    if (onEditTodo) {
      onEditTodo(todo);
    }
  };

  if (loading) return <div>Loading todos...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Todos</h2>
      {todos.length === 0 ? (
        <p className={styles.emptyMessage}>No todos yet. Add your first todo!</p>
      ) : (
        <ul className={styles.todoList}>
          {todos.map(todo => (
            <li key={todo.id} className={styles.todoItem}>
              <div className={styles.todoInfo}>
                <h3 className={styles.todoTitle}>{todo.title}</h3>
                {todo.description && (
                  <p className={styles.todoDescription}>{todo.description}</p>
                )}
                <span className={`${styles.status} ${todo.completed ? styles.completed : styles.pending}`}>
                  {todo.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
              <div className={styles.actions}>
                <button
                  className={styles.toggleButton}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button
                  className={styles.editButton}
                  onClick={() => handleEditClick(todo)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;