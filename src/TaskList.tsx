import { Checkbox, ListItem, UnorderedList, Button } from '@chakra-ui/react'
import { Task } from './App';


interface TaskListProps {
    taskCollection: Task[];
    setTaskCollection: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TaskList = ({ taskCollection, setTaskCollection }: TaskListProps) => {

    function handleCheckboxChange(taskId: number) {
        setTaskCollection((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, isDone: !task.isDone } : task
        ))
    }

    return (<>
        <UnorderedList styleType="' '" mt='5' ml='5%'>
            {taskCollection.map((t: any) => {
                return (
                    <ListItem mb='3'>
                        <Checkbox iconColor='green.500' colorScheme='white' iconSize='1rem' onChange={() => handleCheckboxChange(t.id)} isChecked={t.isDone}>
                            {t.task}
                        </Checkbox>
                        <Button colorScheme='red' variant='link' size='sm'>
                            x
                        </Button>
                    </ListItem>
                )
            })}

        </UnorderedList >

    </>)
}