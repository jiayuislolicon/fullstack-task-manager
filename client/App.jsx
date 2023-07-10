import React, { useCallback, useEffect, useState } from 'react';
import { Button, Space, Input } from 'antd';

import './app.css';
import { deleteTask, getTasks, updateTask, createNewTask } from './utils/api';
import Task from './components/Task';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const getTaskList = useCallback(() => {
    getTasks().then((data) => setTaskList(data.tasks));
  }, []);

  const handleAddTask = () => {
    createNewTask(taskInput).then(() => getTaskList());
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <main className='flex justify-center items-center w-full mt-10'>
      <div className='w-2/3 max-w-[800px]'>
        <form className='w-full p-14 rounded-3xl flex flex-col justify-center bg-white mb-6'>
          <h2 className='text-center mb-5'>Task Manager</h2>
          <Space.Compact className='w-full m-auto'>
            <Input
              placeholder='add new task'
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              maxLength={20}
            />
            <Button type='primary' onClick={handleAddTask}>
              Add
            </Button>
          </Space.Compact>
        </form>
        <section className='w-full p-12 rounded-3xl bg-white'>
          {taskList.map((task, index) => (
            <Task
              {...task}
              className={index !== 0 && 'mt-5'}
              key={`task-${task._id}`}
              handleFinish={(checked) => {
                updateTask(task._id, { done: checked });
                getTaskList();
              }}
              handleDelete={() => {
                deleteTask(task._id);
                getTaskList();
              }}
              handleEdit={(name) => {
                updateTask(task._id, { name });
                getTaskList();
              }}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;
