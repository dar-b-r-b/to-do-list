import './App.css';
import { Header } from './Header';
import { Date } from './Date';
import { InputGroup } from './InputGroup';
import { Filter } from './Filter';
import { TaskList } from './TaskList';
import { Stikers } from './Stikers';
import { useState } from 'react';

export interface Task { task: string, isDone: boolean }


const App = () => {
  const tasks: Task[] = [{ task: 'кошку кормит', isDone: false }, { task: 'завтракат', isDone: false },
  { task: 'кошку гладит', isDone: false }];

  const [inputTask, setInputTask] = useState<string>('');
  const [newTasks, setNewTasks] = useState<Task[]>(tasks);

  return (
    <>
      <Header />
      <Date />
      <InputGroup inputTask={inputTask} setInputTask={setInputTask} newTasks={newTasks} setNewTasks={setNewTasks} />
      <Filter />
      <TaskList newTasks={newTasks} />
      <Stikers />
    </>
  );
}

export default App;
