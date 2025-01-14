import React from 'react';
import { TaskProvider } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home: React.FC = () => {
  return (
    <TaskProvider>
      <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded'>
        <h1 className='text-2xl font-bold text-center pb-8'>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default Home;
