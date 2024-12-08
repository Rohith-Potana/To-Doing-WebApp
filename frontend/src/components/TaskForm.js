import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAdd, initialTask, onUpdate }) => {
    const [task, setTask] = useState({ title: '', description: '' });

    // Update form when initialTask changes
    useEffect(() => {
        if (initialTask) {
            setTask(initialTask);
        } else {
            setTask({ title: '', description: '' });
        }
    }, [initialTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task._id) {
            onUpdate(task);
        } else {
            onAdd(task);
        }
        setTask({ title: '', description: '' }); // Reset form after submission
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Task Description"
                value={task.description}
                onChange={handleChange}
            />
            <button type="submit">{task._id ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
