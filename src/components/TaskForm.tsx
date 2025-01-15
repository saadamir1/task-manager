'use client';

import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [category, setCategory] = useState('Work');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle, category, dueDate, priority);
      setTaskTitle('');
      setCategory('Work');
      setDueDate('');
      setPriority('Medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input
        type='text'
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder='Add a new task'
        className='px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-400'
      />
      <div className='flex gap-4'>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='px-4 py-2 border rounded focus:outline-none'
        >
          <option value='Work'>Work</option>
          <option value='Personal'>Personal</option>
          <option value='Urgent'>Urgent</option>
        </select>
        <input
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className='px-4 py-2 border rounded focus:outline-none'
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className='px-4 py-2 border rounded focus:outline-none'
        >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
      </div>
      <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
