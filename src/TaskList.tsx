import { Checkbox, ListItem, UnorderedList, Button } from '@chakra-ui/react'
import { Task } from './App';


interface TaskListProps {
    taskCollection: Task[];
    setTaskCollection: React.Dispatch<React.SetStateAction<Task[]>>;
    selectedStatus: string
}

export const TaskList = ({ taskCollection, setTaskCollection, selectedStatus }: TaskListProps) => {

    const handleCheckboxChange = (taskId: number) => {
        setTaskCollection((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, isDone: !task.isDone } : task
        ))
    }

    const handleDeleteTask = (taskId: number) => {
        setTaskCollection((tasks) => tasks.filter((t) => t.id !== taskId))
    }

    const filteredTasks = taskCollection.filter((task) => {
        if (selectedStatus === 'Все') return true;
        if (selectedStatus === 'Завершенные') return task.isDone;
        if (selectedStatus === 'Незавершенные') return !task.isDone;
        return true;
    });

    return (<>
        <UnorderedList styleType="' '" mt='5' ml='5%'>
            {filteredTasks.map((t: any) => {
                return (
                    <ListItem mb='3'>
                        <Checkbox iconColor='green.500' colorScheme='white' iconSize='1rem' onChange={() => handleCheckboxChange(t.id)} isChecked={t.isDone}>
                            {t.task}
                        </Checkbox>
                        <Button colorScheme='red' variant='link' size='sm' onClick={() => handleDeleteTask(t.id)}>
                            x
                        </Button>
                    </ListItem>
                )
            })}

        </UnorderedList >

    </>)
}