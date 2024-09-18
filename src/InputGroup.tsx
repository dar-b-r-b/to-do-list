import { Flex, FormControl, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

export function InputGroup() {
  return (
    <Flex justify="center" gap="2">
      <FormControl><Input placeholder='Введите свои грязные делишки' focusBorderColor='pink.400' /></FormControl>
      <FormControl>
        <Button colorScheme='pink'>Добавить</Button>
      </FormControl>
    </Flex>
  )
}