// src/components/TaskSummary.js
"use client";
import React from 'react';
import { useTasks } from '../../context/taskContext'; // Adjust the import path as necessary

const TaskSummary = () => {
  const { tasks, loading } = useTasks();

  if (loading) return <p className="text-center">Loading...</p>;

  // Calculate summary
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Task Summary</h2>
      <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4">
        <p className="text-lg">Total Tasks: <span className="font-bold">{totalTasks}</span></p>
        <p className="text-lg">Completed Tasks: <span className="font-bold">{completedTasks}</span></p>
        <p className="text-lg">Pending Tasks: <span className="font-bold">{activeTasks}</span></p>
      </div>
    </div>
  );
};

export default TaskSummary;
