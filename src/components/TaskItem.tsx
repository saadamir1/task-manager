'use client';

import React from 'react';
import { Task } from '../context/TaskContext';
import { useTaskContext } from '../context/TaskContext';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { toggleTask, deleteTask } = useTaskContext();

  return (
    <div
      className={`flex items-center justify-between p-3 border rounded ${
        task.completed ? 'bg-green-100' : 'bg-white'
      }`}
    >
      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className='w-5 h-5'
        />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.title}</span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className='text-red-500 hover:underline'
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
