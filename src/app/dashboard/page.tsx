"use client";
import { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Taskify Dashboard</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-6 py-2 rounded-r hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Add one above!</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between mb-2 p-2 rounded border 
                  ${task.completed ? "bg-green-100 text-green-700" : "bg-white"}`}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span
                    className={`${task.completed ? "line-through" : ""}`}
                  >
                    {task.text}
                  </span>
                </label>
                <button
                  onClick={() => removeTask(task.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
