import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './App.css';

const App = () => {
  const tasks = [
    { name: 'learn react', completed: true },
    { name: 'learn js', completed: true },
    { name: 'learn angular', completed: false },
  ];

  return (
    <>
      <h1>Daily Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : 'not-completed'}>
            {task.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;