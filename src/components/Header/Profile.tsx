import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileDate?: boolean;
}

export function Profile( {showProfileDate = true}:  ProfileProps) {
    return (
        <Flex align='center'>
            { showProfileDate && (
            <Box mr='4' textAlign='right'>
                <Text>Danillo Rezende</Text>
                <Text color='gray.300' fontSize='small'>
                    danillo.rezende3@gmail.com</Text>
            </Box>
            )}

            <Avatar size='md' name='Danillo Rezende' src='https://github.com/DanilloRezende.png' />

        </Flex>
    )
}
