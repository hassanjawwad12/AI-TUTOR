import { HStack, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'

const SidebarLink:FC<{name: string, photo: string, active : boolean}> = ({name, photo, active}) => {
  
  return (
    <HStack
        alignItems={'center'}
        spacing={4}
        background={active ? '#D9D9D988' : ''}
        rounded={'md'}
        paddingX={4}
        paddingY={3}
        _hover={{
            backgroundColor: '#D9D9D988',
            transition: 'background-color 500ms ease'
        }}
    >
        <Image
            src={photo} 
        />
        <Text
            w={40}
        >
            {name}
        </Text>
    </HStack>
  )
}

export default SidebarLink