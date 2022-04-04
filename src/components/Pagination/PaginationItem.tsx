import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean
}

export function PaginationItem({ 
    isCurrent = false, 
    number 
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='pink'
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursos: 'default',
                }}>
                {number}
            </Button>
        )

            }

            return (
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='pink'
                bg='gray.700'
                _hover={{
                    bg: 'gray.500'
                }}
            >
                {number}
            </Button>
            )
}