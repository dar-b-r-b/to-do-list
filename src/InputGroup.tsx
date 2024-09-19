import { HStack, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

export function InputGroup() {
  return (
    <HStack justify='center' mt='4'>
      <Input placeholder='Введите свои грязные делишки' focusBorderColor='pink.400' width="40%" />
      <Button colorScheme='pink'>Добавить</Button>
    </HStack>
  )
}