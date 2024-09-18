import { extendTheme } from '@chakra-ui/react'
import '@fontsource/sofadi-one';
import '@fontsource/fira-mono';

const theme = extendTheme({
    fonts: {
        heading: `'Sofadi One', system-ui`,
        body: `'Fira Mono', monospace`,
    },
})

export default theme