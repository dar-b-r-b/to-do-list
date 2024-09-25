import { Checkbox, ListItem, UnorderedList, Button } from '@chakra-ui/react'
import { Task } from './App'

interface TaskListProps {
    newTasks: Task[];
}

export const TaskList = ({ newTasks }: TaskListProps) => {

    return (<>
        <UnorderedList styleType="' '" mt='5' ml='5%'>
            {newTasks.map((t: any) => {
                return (
                    <ListItem mb='3'>
                        <Checkbox iconColor='green.500' colorScheme='white' iconSize='1rem'>
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