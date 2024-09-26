import './App.css';
import { Header } from './Header';
import { Date } from './Date';
import { InputGroup } from './InputGroup';
import { Filter } from './Filter';
import { TaskList } from './TaskList';
import { Stikers } from './Stikers';
import { useState } from 'react';

export interface Task { id: number, task: string, isDone: boolean };

const App = () => {
  const [id, setId] = useState<number>(0);
  const tasks: Task[] = [{ id: 12, task: 'кошку кормит', isDone: false }, { id: 11, task: 'завтракат', isDone: true }];
  const [inputTask, setInputTask] = useState<string>('');
  const [taskCollection, setTaskCollection] = useState<Task[]>(tasks);



  return (
    <>
      <Header />
      <Date />
      <InputGroup inputTask={inputTask} setInputTask={setInputTask} taskCollection={taskCollection} setTaskCollection={setTaskCollection} id={id} setId={setId} />
      <Filter />
      <TaskList taskCollection={taskCollection} setTaskCollection={setTaskCollection} />
      <Stikers />
    </>
  );
}

export default App;
