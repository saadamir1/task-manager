'use client';

import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-4'>
      <input
        type='text'
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder='Add a new task'
        className='px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-400'
      />
      <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
        Add
      </button>
    </form>
  );
};

export default TaskForm;
