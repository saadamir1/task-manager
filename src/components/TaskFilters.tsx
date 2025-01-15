'use client';

import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskFilters: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const { tasks } = useTaskContext();

  const filteredTasks = tasks.filter(
    (task) =>
      (filterCategory === 'All' || task.category === filterCategory) &&
      (filterPriority === 'All' || task.priority === filterPriority)
  );

  return (
    <div className='flex gap-4'>
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className='px-4 py-2 border rounded focus:outline-none'
      >
        <option value='All'>All Categories</option>
        <option value='Work'>Work</option>
        <option value='Personal'>Personal</option>
        <option value='Urgent'>Urgent</option>
      </select>
      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
        className='px-4 py-2 border rounded focus:outline-none'
      >
        <option value='All'>All Priorities</option>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
      </select>
    </div>
  );
};

export default TaskFilters;
