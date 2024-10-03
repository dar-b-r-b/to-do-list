import { HStack, Select, Text } from '@chakra-ui/react';


interface FilterProps {
    selectedStatus: string;
    setSelectedStatus: React.Dispatch<React.SetStateAction<string>>
}

export function Filter({ selectedStatus, setSelectedStatus }: FilterProps) {


    return (<HStack justify='center' mt='4'>
        <Text>Показать</Text>
        <Select size='xs' width='11%' value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)}>
            <option value='Все'>Все</option>
            <option value='Незавершенные'>Незавершенные</option>
            <option value='Завершенные'>Завершенные</option>
        </Select>
    </HStack>)
}