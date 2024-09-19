import { Image } from '@chakra-ui/react'

export function Stikers() {
    return (<>
        <Image boxSize='150px'
            objectFit='contain'
            src="./stiker7.png"
            alt='snoopy'
            position="absolute" top="80%" left="85%"
        />
        <Image boxSize='150px'
            objectFit='contain'
            src="./stiker4.png"
            alt='snoopy'
            position="absolute" top="1%" left="5%"
        />
        <Image boxSize='70px'
            objectFit='contain'
            src="./stiker5.png"
            alt='snoopy'
            position="absolute" top="40%" left="25%"
        />
        <Image boxSize='100px'
            objectFit='contain'
            src="./stiker8.png"
            alt='snoopy'
            position="absolute" top="20%" left="85%"
        />
    </>)
}