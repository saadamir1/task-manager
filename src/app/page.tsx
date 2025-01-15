"use client"; 

import React from "react";
import { TaskProvider } from "@/context/TaskContext";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import DarkModeToggle from "@/components/DarkModeToggle";

const Home: React.FC = () => {
  return (
    <TaskProvider>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center pb-8 text-gray-800 dark:text-white">
          Task Manager
        </h1>
        <DarkModeToggle />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default Home;
