import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react"
import books from '../../assets/icons/books.svg'
import ka from '../../assets/icons/ka.svg'
import maingo from '../../assets/icons/main-go.svg'
import lightgo from '../../assets/icons/light-go.svg'

const Home = () => {
  return (
    <VStack
        paddingY={10}
        w={'70%'}
        spacing={8}
        h={'100%'}
        justifyContent={'center'}
    >
        <Heading
            fontSize={['3xl', '3xl', '4xl', '5xl']}
            color={'brand.dark'}
            fontWeight={600}
            textAlign={'center'}
        > 
            Choose Your Study Material
        </Heading>
        <Text
            textAlign={'center'}
            fontSize={'lg'}
            color={'brand.dark'}
        >
            Tailor Your Learning Experience: Select your preferred study material option from the choices below to optimize your educational path.
        </Text>
        <VStack
            w={'100%'}
            marginTop={10}
            spacing={7}
        >
            <HStack
                justifyContent={'space-between'}
                w={['100%', '100%', '80%', '80%', '50%']}
                background={'#E7E7E7'}
                paddingX={5}
                paddingY={6}
                rounded={'md'}
                border={'1px solid'}
                borderColor={'#D7D7D7AA'}
                transition={'transform 300ms linear'}
                _hover={{
                    transform: 'scale(105%)',
                }}
                cursor={'pointer'}
            >
                <HStack
                    spacing={3}
                >
                    <Image
                        src={books}
                        w={10}
                    />
                    <VStack
                        color={'brand.dark'}
                        fontWeight={600}
                        spacing={0}
                        alignItems={'flex-start'}
                    >
                        <HStack
                            spacing={1}
                        >
                            <Text>
                                Use free
                            </Text> 
                            <Text display={'inline'} color={'brand.main'}>ABC</Text> 
                        </HStack>
                        <Text>study material</Text>
                    </VStack>
                </HStack>
                <Image
                    src={maingo}
                />
            </HStack>
            <HStack
                justifyContent={'space-between'}
                w={['100%', '100%', '80%', '80%', '50%']}
                background={'brand.main'}
                paddingX={5}
                paddingY={6}
                rounded={'md'}
                border={'1px solid'}
                borderColor={'#D7D7D7AA'}
                transition={'transform 300ms linear'}
                _hover={{
                    transform: 'scale(105%)'
                }}
                cursor={'pointer'}
            >
                <HStack
                    spacing={3}
                >
                    <Image
                        src={ka}
                        w={10}
                    />
                    <VStack
                        color={'brand.light'}
                        fontWeight={600}
                        spacing={0}
                        alignItems={'flex-start'}
                    >
                        <HStack
                            spacing={1}
                        >
                            <Text>
                                Use your own
                            </Text> 
                        </HStack>
                        <Text>study material</Text>
                    </VStack>
                </HStack>
                <Image
                    src={lightgo}
                />
            </HStack>
        </VStack>
    </VStack>
  )
}

export default Home