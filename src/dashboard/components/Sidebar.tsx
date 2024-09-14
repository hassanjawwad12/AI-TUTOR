import { VStack } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction } from 'react';
import SidebarLink from './SidebarLink';
import home from '../../assets/icons/home.svg';
import profile from '../../assets/icons/profile.svg'
import notification from '../../assets/icons/notification.svg'
import settings from '../../assets/icons/settings.svg'
import logout from '../../assets/icons/logout.svg'
import { useLocation } from 'react-router-dom';

const Sidebar:FC<{left: number, setLeft: Dispatch<SetStateAction<number>>}> = ({left, setLeft}) => {

  const { pathname } = useLocation();

  type link = 
  {
    id?: string, 
    name: string, 
    photo: string, 
    route: string
  }

  const links:link[] = [
    {
        name: 'Home',
        photo: home,
        route: '/dashboard'
    },
    {
        name: 'Profile',
        photo: profile,
        route: '/dashboard/profile'
    },
    {
        name: 'Notifications',
        photo: notification,
        route: '/dashboard/notifications'
    },
    {
        name: 'Settings',
        photo: settings,
        route: '/dashboard/settings'
    },
    {
        id: 'logout',
        name: 'Logout',
        photo: logout,
        route: '/'
    }
  ]

  return (
    <VStack
        paddingX={8}
        paddingY={10}
        borderRight={'1px solid'}
        borderColor={'#4E4E4E22'}
        position={['absolute', 'absolute', 'absolute', 'sticky']}
        left={left}
        overflow={'auto'}
        transform={'translateY(-5px)'}
        justifyContent={'flex-start'}
        color={'brand.dark'}
        h={'90vh'}
        spacing={8}
        background={'#F6F6F6'}
        transition={'left 200ms linear'}
        _hover={{
            backgroundColor: '#F6F6F6'  
        }}
    >
        {
            links.map(link => 
                (
                    <VStack
                        onClick={() => setLeft(-296)}
                        cursor={'pointer'}
                        id={link.name}
                    >
                        <SidebarLink name={link.name} photo={link.photo} active={pathname.includes(link.route) && link.id !== 'logout' ? true : false}/>
                    </VStack>
                )
            )
        }
    </VStack>
  )
}

export default Sidebar