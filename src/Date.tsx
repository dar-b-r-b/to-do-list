import { Flex, Heading, Text } from "@chakra-ui/react";
import DateObject from "react-date-object";

export function Date() {
    let date = new DateObject();
    return (
        <Flex justify="end" mr={9}>
            <Heading color="yellow.400" >{date.toString()}</Heading>
        </Flex>
    );
}