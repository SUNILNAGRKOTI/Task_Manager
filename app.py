from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import uuid

app = Flask(__name__)
CORS(app)

# In-memory storage for tasks
tasks = []

# Helper function to find task by id
def find_task(task_id):
    return next((task for task in tasks if task['id'] == task_id), None)

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    """Get all tasks"""
    return jsonify({
        'success': True,
        'tasks': tasks,
        'count': len(tasks)
    }), 200

@app.route('/api/tasks/<task_id>', methods=['GET'])
def get_task(task_id):
    """Get a single task by ID"""
    task = find_task(task_id)
    if task:
        return jsonify({
            'success': True,
            'task': task
        }), 200
    return jsonify({
        'success': False,
        'message': 'Task not found'
    }), 404

@app.route('/api/tasks', methods=['POST'])
def create_task():
    """Create a new task"""
    data = request.get_json()
    
    if not data or 'title' not in data:
        return jsonify({
            'success': False,
            'message': 'Title is required'
        }), 400
    
    new_task = {
        'id': str(uuid.uuid4()),
        'title': data['title'],
        'description': data.get('description', ''),
        'completed': False,
        'created_at': datetime.now().isoformat(),
        'updated_at': datetime.now().isoformat()
    }
    
    tasks.append(new_task)
    
    return jsonify({
        'success': True,
        'message': 'Task created successfully',
        'task': new_task
    }), 201

@app.route('/api/tasks/<task_id>', methods=['PUT'])
def update_task(task_id):
    """Update an existing task"""
    task = find_task(task_id)
    
    if not task:
        return jsonify({
            'success': False,
            'message': 'Task not found'
        }), 404
    
    data = request.get_json()
    
    if 'title' in data:
        task['title'] = data['title']
    if 'description' in data:
        task['description'] = data['description']
    if 'completed' in data:
        task['completed'] = data['completed']
    
    task['updated_at'] = datetime.now().isoformat()
    
    return jsonify({
        'success': True,
        'message': 'Task updated successfully',
        'task': task
    }), 200

@app.route('/api/tasks/<task_id>', methods=['DELETE'])
def delete_task(task_id):
    """Delete a task"""
    task = find_task(task_id)
    
    if not task:
        return jsonify({
            'success': False,
            'message': 'Task not found'
        }), 404
    
    tasks.remove(task)
    
    return jsonify({
        'success': True,
        'message': 'Task deleted successfully'
    }), 200

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'success': True,
        'message': 'API is running'
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)