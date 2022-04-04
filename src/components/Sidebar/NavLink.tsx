import { Box, Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType
    children: string
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (

        <Link display='flex' color='pink.400' py='1' {...rest}>
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='medium'>{children}</Text>

        </Link>
    )
}