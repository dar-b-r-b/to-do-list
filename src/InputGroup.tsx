import { HStack, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

import { Task } from './App'

interface allProps {
  inputTask: string;
  setInputTask: React.Dispatch<React.SetStateAction<string>>;
  taskCollection: Task[];
  setTaskCollection: React.Dispatch<React.SetStateAction<Task[]>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>
}

export const InputGroup = ({ inputTask, setInputTask, taskCollection, setTaskCollection, id, setId }: allProps) => (
  <HStack justify='center' mt='4'>
    <Input placeholder='Введите свои грязные делишки' focusBorderColor='pink.400' width='40%'
      value={inputTask} onChange={(event) => { setInputTask(event.target.value); setId(id + 1) }} />
    <Button colorScheme='pink' onClick={() => { setTaskCollection([...taskCollection, { id: id, task: inputTask, isDone: false }]); setInputTask('') }}>Добавить</Button>
  </HStack>)

