import { HStack, Image, Text } from "@chakra-ui/react"
import LogoTitle from "../../components/LogoTitle"
import { Dispatch, FC, SetStateAction } from "react"
import hamburger from '../../assets/icons/hamburger.svg'

const Header:FC<{setLeft: Dispatch<SetStateAction<number>>}> = ({setLeft}) => {
 
  const toggleSidebar = () =>
  {
    setLeft((left: number) => left === 0 ? -296 : 0);
  }

  return (
    <HStack
        w={'100%'}
        padding={6}
        paddingX={8}
        boxShadow={'0px 0px 20px 10px #C5C8E9'}
        justifyContent={'space-between'}
        background={'#EFEFEF'}
        blur={50}
        position={'sticky'}
        zIndex={50}
    >
        <LogoTitle />
        <Text
            fontFamily={'Poppins'}
            fontSize={'small'}
            display={['none', 'none', 'none', 'block']}
        >
            Username
        </Text>

        <Image
            src={hamburger}
            display={['block', 'block', 'block', 'none']}
            onClick={() => toggleSidebar()}
            w={5}
            cursor={'pointer'}
        />
        
    </HStack>
  )
}

export default Header