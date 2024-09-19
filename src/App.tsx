import './App.css';
import { Header } from './Header';
import { Date } from './Date';
import { InputGroup } from './InputGroup';
import { Filter } from './Filter';
import { TaskList } from './TaskList';
import { Stikers } from './Stikers';


function App() {
  return (
    <>
      <Header />
      <Date />
      <InputGroup />
      <Filter />
      <TaskList />
      <Stikers />
    </>
  );
}

export default App;
