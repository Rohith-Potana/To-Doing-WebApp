import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import Modal from './Modal'; // Import Modal component

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Fetch Tasks
    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/tasks');
            setTasks(res.data);
        } catch (err) {
            console.error('Error fetching tasks:', err.message);
        }
    };

    // Add Task
    const addTask = async (task) => {
        try {
            const res = await axios.post('http://localhost:5000/api/tasks', task);
            setTasks([...tasks, res.data]);
        } catch (err) {
            console.error('Error adding task:', err.message);
        }
    };

    // Update Task
    const updateTask = async (updatedTask) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/tasks/${updatedTask._id}`, updatedTask);
            setTasks(tasks.map((t) => (t._id === updatedTask._id ? res.data : t)));
            setShowModal(false); // Close modal after update
            setCurrentTask(null);
        } catch (err) {
            console.error('Error updating task:', err.message);
        }
    };

    // Delete Task
    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            setTasks(tasks.filter((task) => task._id !== id));
        } catch (err) {
            console.error('Error deleting task:', err.message);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <TaskForm onAdd={addTask} />
            <div>
                {tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        onDelete={deleteTask}
                        onEdit={(task) => {
                            setCurrentTask(task);
                            setShowModal(true);
                        }}
                    />
                ))}
            </div>

            {/* Modal for Editing */}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <TaskForm
                    onAdd={addTask}
                    onUpdate={updateTask}
                    initialTask={currentTask}
                />
            </Modal>
        </div>
    );
};

export default TaskList;
