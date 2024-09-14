import { FC, ReactNode, useEffect, useState } from 'react'
import Header from './components/Header'
import { HStack, VStack } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'

const DashWrapper:FC<{ children: ReactNode }> = ({children}) => {
  
    const [left, setLeft] = useState(-296);

  useEffect((): () => void =>
  {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "auto";
  }, []);

  return (
    <VStack
        w={'100%'}
        minH={'100vh'}
        background={'#F6F6F6'}
    >
        <Header setLeft={setLeft}/>
        <HStack
            w={'100%'}
            alignItems={'flex-start'}
        >
            <Sidebar left={left} setLeft={setLeft}/>
            <VStack
                w={'100%'}
                overflowY={'auto'}
                h={'85vh'}
                background={'#F6F6F6'}
            >
                {children}
            </VStack>
        </HStack>
    </VStack>
  )
}

export default DashWrapper