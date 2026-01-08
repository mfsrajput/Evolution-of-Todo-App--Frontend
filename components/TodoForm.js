import { useState, useEffect } from 'react';
import { todoAPI } from '../utils/api';
import styles from './TodoForm.module.css';

const TodoForm = ({ onAddTodo, onUpdateTodo, initialData = null }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Update form fields when initialData changes (when switching between edit modes)
  useEffect(() => {
    setTitle(initialData?.title || '');
    setDescription(initialData?.description || '');
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (initialData) {
        // Update existing todo
        const updatedTodo = await todoAPI.updateTodo(initialData.id, { title, description });
        if (onUpdateTodo) {
          onUpdateTodo(updatedTodo);
        }
      } else {
        // Create new todo
        const newTodo = await todoAPI.createTodo(title, description);
        if (onAddTodo) {
          onAddTodo(newTodo);
        }
        // Reset form after successful submission
        setTitle('');
        setDescription('');
      }
    } catch (err) {
      setError(err.message || 'Failed to save todo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {initialData ? 'Edit Todo' : 'Add New Todo'}
      </h3>

      {error && <div className={styles.error}>{error}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="title" className={styles.label}>Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={styles.input}
            placeholder="Enter todo title"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
            rows="3"
            placeholder="Enter todo description (optional)"
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? (initialData ? 'Updating...' : 'Adding...') : (initialData ? 'Update Todo' : 'Add Todo')}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;