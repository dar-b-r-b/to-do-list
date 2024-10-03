import { Image } from '@chakra-ui/react'

export function Stikers() {
    return (<>
        <Image boxSize='150px'
            objectFit='contain'
            src="./stiker7.png"
            alt='pink bear'
            position="fixed" top="75%" left="85%"
        />
        <Image boxSize='150px'
            objectFit='contain'
            src="./stiker4.png"
            alt='flowers'
            position="absolute" top="-7" left="9"
        />
        <Image boxSize='70px'
            objectFit='contain'
            src="./stiker5.png"
            alt='bear'
            position="absolute" top="12em" left="30%"
        />
        <Image boxSize='100px'
            objectFit='contain'
            src="./stiker8.png"
            alt='All the time'
            position="absolute" top="6em" left="87%"
        />
        <Image boxSize='70px'
            objectFit='contain'
            src="./stiker2.png"
            alt='smile'
            position="absolute" top="2em" left="58%"
        />
    </>)
}