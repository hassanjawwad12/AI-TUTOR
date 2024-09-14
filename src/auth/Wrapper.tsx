import { FC, ReactNode, useEffect } from 'react';
import { Stack, VStack, Image, HStack } from "@chakra-ui/react"
import LogoTitle from '../components/LogoTitle'

const AuthWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() =>
  {
    document.body.style.overflow = "hidden";
    return () => {document.body.style.overflow="auto"};
  },[]);

  return (
    <>
      <Stack
        direction={["column", "column", "row", "row"]}
        width={["100%", "100%", "100%", "100%"]}
        height='100vh'
        justifyContent={'center'}
      >
        <VStack
          width={["100%", "100%", "90%", "50%"]}
          gap={4}
          align={'center'}
          justifyContent={'center'}
        >
          <HStack
          position={'absolute'}
          top={6}
          left={6}
          >
            <LogoTitle />
          </HStack>
          {children}
        </VStack>
        <VStack
          bg={'#23272A'}
          width={["", "", "", "50%"]}
          align={'center'}
          justifyContent={'center'}
        >
          <Image src='/robot.png' alt='robot' width={470} display={['none','none','none','block']} />
        </VStack>
      </Stack>
    </>
  )
}

export default AuthWrapper