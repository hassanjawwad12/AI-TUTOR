import { Box, Button, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import bgLanding from '../../assets/bg.svg';
import LogoTitle from '../../components/LogoTitle'

function Landing() {

  return (
    <VStack
      minH={'100vh'}
      w={'100%'}
      backgroundImage={bgLanding}
      backgroundSize={'cover'}
      position={'relative'}
      justifyContent={'flex-start'}
    >
      <HStack
        justifyContent={'space-between'}
        w={'100%'}
        paddingY={5}
        paddingX={[3, 4, 5, 5]}
        alignItems={'flex-start'}
      >
        <LogoTitle />
        <HStack>
          <Button
            fontSize={'small'}
            fontFamily={'Poppins'}
            fontWeight={100}
            color={'brand.light'}
            backgroundColor={'brand.main'}
            border={'2px solid'}
            borderColor={'brand.main'}
            _hover={{
              backgroundColor: 'brand.light',
              color: 'brand.main',
            }}
            w={24}
          >
            Log in
          </Button>
          <Button
            fontSize={'small'}
            fontFamily={'Poppins'}
            fontWeight={100}
            color={'brand.dark'}
            backgroundColor={'brand.light'}
            border={'2px solid'}
            borderColor={'brand.dark'}
            _hover={{
              backgroundColor: 'brand.dark',
              color: 'brand.light',
            }}
            w={24}
          >
            Contact Us
          </Button>
        </HStack>
      </HStack>
      <VStack
        w={['90%', '90%', '95%', '70%']}
        textAlign={['justify', 'justify', 'center']}
        marginY={'auto'}
        spacing={10}
        position={'absolute'}
        top={'30%'}
      >
        <Box>
          <Heading 
            display={'inline'}
            color={'brand.main'}
            fontSize={['4xl', '4xl', '5xl', '6xl']}
          >
            Explore, Learn, and Play: 
          </Heading>
          <Heading 
            display={'inline'}
            color={'brand.dark'}
            fontSize={['4xl', '4xl', '5xl', '6xl']}
          >
            &nbsp;Education Made Fun!
          </Heading>
        </Box>
        <Text
          color={'brand.gray'}
          w={['100%', '100%', '80%', '50%']}
        >
          Spark Creativity, Play, and Learn Together! Join us for an exciting and safe educational adventure. Personalized lessons, rewarding achievements, and endless fun await. Sign up now for a free trial!
        </Text>
        <Button
          marginTop={4}
          paddingX={24}
          w={['100%', '100%', 'fit-content']}
          paddingY={5}
          color={'brand.light'}
          backgroundColor={'brand.main'}
          border={'2px solid'}
          borderColor={'brand.main'}
          _hover={{
            backgroundColor: 'brand.light',
            color: 'brand.main',
          }}
        >
            Get Started
        </Button>
      </VStack>
    </VStack>
  )
}

export default Landing
