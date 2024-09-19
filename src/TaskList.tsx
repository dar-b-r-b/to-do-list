import { Checkbox, ListItem, UnorderedList, Button } from '@chakra-ui/react'

export function TaskList() {

    const tasks = ['кошку кормит', 'завтракат', 'кошку гладит', 'бегит', 'вязат', 'пресс качат', 'попу мыт', 'спат',]

    return (<>
        <UnorderedList styleType="' '" mt='5' ml='5%'>
            {tasks.map((t) => {
                return (
                    <ListItem mb='3'>
                        <Checkbox iconColor='green.500' colorScheme='white' iconSize='1rem'>
                            {t}
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