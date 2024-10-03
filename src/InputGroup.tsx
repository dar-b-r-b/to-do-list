import { HStack, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Task } from './App';

interface allProps {
  taskCollection: Task[];
  setTaskCollection: React.Dispatch<React.SetStateAction<Task[]>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>
}

export const InputGroup = ({ taskCollection, setTaskCollection, id, setId }: allProps) => {
  const [inputTask, setInputTask] = useState<string>('');
  const handleAddTaskInList = () => {
    if (!inputTask) {
      alert('Заполните поле');
      return;
    }
    setId(id + 1);
    setTaskCollection([...taskCollection, { id: id, task: inputTask, isDone: false }]);
    setInputTask('');
  }
  return (
    <HStack justify='center' mt='4'>
      <Input placeholder='Введите свои грязные делишки' focusBorderColor='pink.400' width='40%'
        value={inputTask} onChange={(event) => setInputTask(event.target.value)} />
      <Button colorScheme='pink' onClick={() => handleAddTaskInList()}>Добавить</Button>
    </HStack>)
}
