// src/components/TaskTable.js
"use client";
import React from 'react';
import { useTasks } from '../../context/taskContext'; // Adjust the import path as necessary

const TaskTable = () => {
  const {
    tasks,
    loading,
    error,
    deleteTask,
  } = useTasks();

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  const handleDelete = async (id) => {
    await deleteTask(id); // Use the deleteTask function from context
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Due Date</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Assigned User</th>
              <th className="py-2 px-4 border-b">Priority</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{task.title}</td>
                <td className="py-2 px-4 border-b">{task.description}</td>
                <td className="py-2 px-4 border-b">{new Date(task.dueDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{task.status}</td>
                <td className="py-2 px-4 border-b">{task.assignedUser ? task.assignedUser.name : 'Unassigned'}</td>
                <td className="py-2 px-4 border-b">{task.priority}</td>
                <td className="py-2 px-4 border-b">
                  <button 
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-500"
                  >
                    Delete
                  </button>
                  {/* You can add an Edit button to handle task updates */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
