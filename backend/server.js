const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/task'); // Import Task schema
const cors = require('cors');

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());


// MongoDB Connection
const mongoURI = 'mongodb://127.0.0.1:27017/testDB'; // Using testDB for testing
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch((err) => console.error('MongoDB Connection Failed:', err));

// CRUD Routes

// 1. Create a Task
app.post('/api/tasks', async (req, res) => {
    try {
        const task = new Task(req.body); // Create a new task document
        await task.save();
        res.status(201).json(task); // Return the created task
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 2. Fetch All Tasks
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find(); // Fetch all tasks
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. Update a Specific Task
app.put('/api/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update and return the updated task
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. Delete a Specific Task
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id); // Delete task by ID
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
