import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/icons/logo.svg';

const LogoTitle = () => {
    return (
        <HStack
            spacing={[2, 3, 4, 4]}
        >
            <Image
                src={logo}
                w={12}
            />
            <Text
                color={'brand.gray'}
                fontWeight={600}
                fontSize={['small', 'medium']}
            >
                APP NAME HERE
            </Text>
        </HStack>
    )
}

export default LogoTitle