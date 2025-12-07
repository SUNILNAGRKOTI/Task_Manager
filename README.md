# Task Manager

A full-stack task management application with Flask backend and React frontend.

## Features

- Full CRUD operations for task management
- RESTful API with proper HTTP methods
- Automated test suite
- Responsive UI that works on all devices
- Real-time task updates
- Mark tasks complete/incomplete

## Getting Started

### What You Need

- Python 3.8+
- Node.js 14+
- npm

### Setup Instructions

#### 1. Get the Code
```bash
git clone <repository-url>
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

## Project Structure

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

## API Documentation

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

## Running Tests

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

## Tech Stack

### Backend
- **Flask** - Lightweight Python web framework
- **Flask-CORS** - Cross-Origin Resource Sharing support
- **uuid** - Unique identifier generation
- **unittest** - Testing framework

### Frontend
- **React** - UI library
- **CSS3** - Modern styling with gradients and animations
- **Fetch API** - HTTP requests

## UI Design

- Clean interface with gradient backgrounds
- Mobile responsive layout
- Smooth transitions and hover effects
- Loading indicators for better UX
- Error messages when something goes wrong
- Helpful empty states

## Configuration

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

## Development Notes

### Adding New Features

1. **Backend** - Add route in `app.py`, add test in `test_app.py`
2. **Frontend** - Update `App.jsx` with new functionality
3. **Test** - Run tests and manual testing
4. **Commit** - Create meaningful commit messages

### Things to Keep in Mind

- Tests should be written for all new API endpoints
- Keep React components focused on one thing
- Always handle errors properly
- Show loading states for async operations
- Use clear variable names

## Current Limitations

- Uses in-memory storage (data clears on restart)
- No user authentication system
- Frontend is a single component
- Basic input validation
- No pagination for large task lists

## Future Improvements

Things I'd like to add:

**High Priority:**
- Database integration (PostgreSQL or MongoDB)
- User authentication and sessions
- Better input validation
- Deploy to production

**Medium Priority:**
- Task categories and tags
- Due dates
- Priority levels
- Search and filtering
- Reorder tasks

**Nice to Have:**
- Dark mode
- Export tasks to CSV
- File attachments
- Share tasks with others
- Mobile app version

## Troubleshooting

**Backend won't start:**
- Check if something is already running on port 5000
- Try changing the port in app.py
- Make sure virtual environment is activated

**CORS errors:**
- Verify flask-cors is installed
- Check CORS is enabled in app.py

**Frontend can't connect:**
- Make sure backend is running
- Check API_URL matches backend port
- Look at browser console for errors

**Tests failing:**
- Activate virtual environment
- Install all requirements again

## Resources

Helpful links I used:
- Flask docs: https://flask.palletsprojects.com/
- React docs: https://react.dev/
- REST API guidelines: https://restfulapi.net/

## License

MIT License - feel free to use this code for your own projects.
