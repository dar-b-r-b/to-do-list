import { HStack, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

import { Task } from './App'

interface allProps {
  inputTask: string;
  setInputTask: React.Dispatch<React.SetStateAction<string>>;
  newTasks: Task[];
  setNewTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const InputGroup = ({ inputTask, setInputTask, newTasks, setNewTasks }: allProps) => (
  <HStack justify='center' mt='4'>
    <Input placeholder='Введите свои грязные делишки' focusBorderColor='pink.400' width='40%'
      value={inputTask} onChange={(event) => { setInputTask(event.target.value) }} />
    <Button colorScheme='pink' onClick={() => { setNewTasks([...newTasks, { task: inputTask, isDone: false }]); setInputTask('') }}>Добавить</Button>
  </HStack>)

