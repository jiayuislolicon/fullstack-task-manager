import React, { useEffect, useRef, useState } from 'react';
import { Button, Space, Input, Checkbox } from 'antd';

import './app.css';
import clsx from 'clsx';

const App = () => {
  const [taskList, setTaskList] = useState([
    { id: 1, name: 'First', done: true },
  ]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    setTaskList(() => {
      const newTask = [
        ...taskList,
        { id: taskList.length + 1, name: taskInput, done: false },
      ];

      return newTask;
    });
  };

  return (
    <main className='flex justify-center items-center w-full mt-10'>
      <div className='w-2/3 max-w-[800px]'>
        <form className='w-full p-14 rounded-3xl flex flex-col justify-center bg-white mb-6'>
          <h2 className='text-center mb-5'>Task Manager</h2>
          <Space.Compact className='w-2/3 m-auto'>
            <Input
              placeholder='add new task'
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <Button type='primary' onClick={handleAddTask}>
              Add
            </Button>
          </Space.Compact>
        </form>
        {taskList.map((task, index) => (
          <div
            className='w-full p-12 rounded-3xl bg-white'
            key={`task-${task.id}`}
          >
            <Checkbox
              checked={task.done}
              onChange={(e) => {
                setTaskList(() => {
                  const newTask = [...taskList];
                  newTask[index].done = e.target.checked;
                  return newTask;
                });
              }}
              className={clsx('text-xl', task.done && 'line-through')}
            >
              {task.name}
            </Checkbox>
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
