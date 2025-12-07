import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/tasks`);
      const data = await response.json();
      if (data.success) {
        setTasks(data.tasks);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title.trim()) return;
    setLoading(true);

    try {
      if (editingTask) {
        const response = await fetch(`${API_URL}/tasks/${editingTask.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.success) {
          setTasks(tasks.map(t => t.id === editingTask.id ? data.task : t));
        }
      } else {
        const response = await fetch(`${API_URL}/tasks`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.success) {
          setTasks([...tasks, data.task]);
        }
      }
      closeModal();
    } catch (error) {
      console.error('Error saving task:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (data.success) {
        setTasks(tasks.filter(t => t.id !== id));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (task) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...task, completed: !task.completed })
      });
      const data = await response.json();
      if (data.success) {
        setTasks(tasks.map(t => t.id === task.id ? data.task : t));
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const openModal = (task = null) => {
    if (task) {
      setEditingTask(task);
      setFormData({ title: task.title, description: task.description });
    } else {
      setEditingTask(null);
      setFormData({ title: '', description: '' });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingTask(null);
    setFormData({ title: '', description: '' });
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="header-text">
            <h1>Task Manager</h1>
            <p>Organize your tasks efficiently</p>
          </div>
          <button className="btn-primary" onClick={() => openModal()}>
            ➕ Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <div className="empty-state">
              <p>No tasks yet. Create your first task!</p>
            </div>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="task-card">
                <div className="task-content">
                  <button
                    className="checkbox"
                    onClick={() => toggleComplete(task)}
                  >
                    {task.completed ? '✅' : '⭕'}
                  </button>
                  
                  <div className="task-details">
                    <h3 className={task.completed ? 'completed' : ''}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className={task.completed ? 'completed' : ''}>
                        {task.description}
                      </p>
                    )}
                    <span className="task-date">
                      Created: {new Date(task.created_at).toLocaleString()}
                    </span>
                  </div>

                  <div className="task-actions">
                    <button
                      className="btn-edit"
                      onClick={() => openModal(task)}
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{editingTask ? 'Edit Task' : 'New Task'}</h2>
              <button className="btn-close" onClick={closeModal}>
                ✖
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="Enter task title"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  placeholder="Enter task description"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={loading || !formData.title.trim()}
              >
                {loading ? 'Saving...' : editingTask ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;