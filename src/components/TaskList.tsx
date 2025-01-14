'use client';

import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskContext';

const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();

  return (
    <div className='mt-6'>
      {tasks.length === 0 ? (
        <p className='text-gray-500'>No tasks yet. Start by adding one!</p>
      ) : (
        <div className='space-y-4'>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
