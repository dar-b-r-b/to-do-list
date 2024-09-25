import { HStack, Select, Text } from '@chakra-ui/react';

export function Filter() {
    return (<HStack justify='center' mt='4'>
        <Text>Показать</Text>
        <Select size='xs' width='11%'>
            <option value='Все'>Все</option>
            <option value='Незавершенные'>Незавершенные</option>
            <option value='Завершенные'>Завершенные</option>
        </Select>
    </HStack>)
}