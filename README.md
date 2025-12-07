# 📝 Task Manager - Flask + React

A modern, full-stack task management application built with Flask (Python) and React (JavaScript). Create, read, update, and delete tasks with a beautiful, responsive interface.

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)
![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete tasks
- ✅ **RESTful API** - Clean, standards-compliant endpoints
- ✅ **Automated Tests** - Comprehensive test suite included
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Real-time Updates** - Instant UI updates
- ✅ **Task Completion** - Mark tasks as complete/incomplete
- ✅ **Modern UI** - Beautiful gradient design with smooth animations

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

### Installation

#### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd task-manager
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the backend
python app.py
```

Backend will run on `http://localhost:5000`

#### 3. Frontend Setup

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

Frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
task-manager/
│
├── backend/
│   ├── app.py              # Flask application & API routes
│   ├── test_app.py         # Automated tests
│   └── requirements.txt    # Python dependencies
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── App.jsx         # Main React component
    │   ├── App.css         # Styles
    │   └── index.js        # Entry point
    └── package.json        # Node dependencies
```

## 🔌 API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/tasks` | Get all tasks | - |
| `GET` | `/tasks/<id>` | Get specific task | - |
| `POST` | `/tasks` | Create new task | `{"title": "string", "description": "string"}` |
| `PUT` | `/tasks/<id>` | Update task | `{"title": "string", "description": "string", "completed": boolean}` |
| `DELETE` | `/tasks/<id>` | Delete task | - |

### Example Requests

**Create Task:**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "description": "Milk, eggs, bread"}'
```

**Get All Tasks:**
```bash
curl http://localhost:5000/api/tasks
```

**Update Task:**
```bash
curl -X PUT http://localhost:5000/api/tasks/<task-id> \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "completed": true}'
```

**Delete Task:**
```bash
curl -X DELETE http://localhost:5000/api/tasks/<task-id>
```

### Response Format

**Success Response (201/200):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false,
  "created_at": "2024-12-07T10:30:00.000000",
  "updated_at": "2024-12-07T10:30:00.000000"
}
```

**Error Response (400/404):**
```json
{
  "error": "Task not found"
}
```

## 🧪 Running Tests

```bash
cd backend
python test_app.py
```

Expected output:
```
........
----------------------------------------------------------------------
Ran 8 tests in 0.045s

OK
```

## 🛠️ Technology Stack

### Backend
- **Flask** - Lightweight Python web framework
- **Flask-CORS** - Cross-Origin Resource Sharing support
- **uuid** - Unique identifier generation
- **unittest** - Testing framework

### Frontend
- **React** - UI library
- **CSS3** - Modern styling with gradients and animations
- **Fetch API** - HTTP requests

## 🎨 UI Features

- **Modern Design** - Purple gradient theme
- **Responsive Layout** - Mobile-first approach
- **Smooth Animations** - Hover effects and transitions
- **Loading States** - User feedback during operations
- **Error Handling** - Clear error messages
- **Empty States** - Helpful messages when no tasks exist

## 🔧 Configuration

### Backend Port
Change the port in `backend/app.py`:
```python
if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Change port here
```

### Frontend API URL
Update API URL in `frontend/src/App.jsx`:
```javascript
const API_URL = 'http://localhost:5001/api';  // Update here
```

## 📝 Development Workflow

### Adding New Features

1. **Backend** - Add route in `app.py`, add test in `test_app.py`
2. **Frontend** - Update `App.jsx` with new functionality
3. **Test** - Run tests and manual testing
4. **Commit** - Create meaningful commit messages

### Best Practices

- Write tests for new API endpoints
- Keep components small and focused
- Use meaningful variable names
- Handle errors gracefully
- Add loading states for async operations

## 🚧 Known Limitations

- **In-Memory Storage** - Data is lost when server restarts
- **No Authentication** - All tasks are public
- **Single Component** - Frontend could be split into smaller components
- **No Validation** - Limited input sanitization
- **No Pagination** - All tasks loaded at once

## 🎯 Future Enhancements

### High Priority
- [ ] Add database (PostgreSQL/MongoDB)
- [ ] Implement user authentication (JWT)
- [ ] Add input validation and sanitization
- [ ] Deploy to cloud (Heroku/AWS)

### Medium Priority
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search and filter functionality
- [ ] Drag-and-drop reordering

### Low Priority
- [ ] Dark mode toggle
- [ ] Export tasks (CSV/PDF)
- [ ] Task attachments
- [ ] Collaboration features
- [ ] Mobile app (React Native)

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
```bash
# Check if port 5000 is in use
# Windows:
netstat -ano | findstr :5000
# macOS/Linux:
lsof -i :5000

# Kill the process or change port in app.py
```

**CORS errors:**
```bash
# Ensure flask-cors is installed
pip install flask-cors

# Verify CORS is enabled in app.py
```

**Frontend can't connect:**
```bash
# Check backend is running
# Verify API_URL in App.jsx matches backend port
# Check browser console for errors
```

**Tests failing:**
```bash
# Ensure virtual environment is activated
# Install all dependencies
pip install -r requirements.txt
```

## 📚 Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://react.dev/)
- [REST API Best Practices](https://restfulapi.net/)
- [Python Testing Guide](https://docs.python.org/3/library/unittest.html)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Flask team for the amazing framework
- React team for the powerful UI library
- Anthropic's Claude for assistance with development

---

⭐ **Star this repository if you find it helpful!**

📧 **Questions?** Open an issue or reach out!

🚀 **Happy Coding!**
