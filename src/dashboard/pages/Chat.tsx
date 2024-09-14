import { HStack, IconButton, Image, Input, VStack } from '@chakra-ui/react'
import send from '../../assets/icons/send.svg'
import attachment from '../../assets/icons/attachment.svg'
import ChatMessage from '../components/ChatMessage'
import { useRef, useState } from 'react'

const Chat = () => {
    
    const [chatMessages, updateMessages] = useState([
        {
            type: 'user',
            content: 'Hello',
            time: '23:00'
        },
        {
            type: 'bot',
            content: 'Hi! How can I help?',
            time: '0:0'
        }
    ]);
    
    const messageRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    const sendMessage = () =>
    {
        const date = new Date();
        if (messageRef?.current)
        {
            updateMessages([...chatMessages, {
                type: 'user',
                content: messageRef.current.value,
                time: `${date.getHours()}:${date.getMinutes()}`
            }]);

            setTimeout(() => scrollRef.current ? scrollRef.current.scrollTop = scrollRef.current.scrollHeight : '', 300);

            messageRef.current.value = "";
            //request goes here
        }

    }
  
  return (
    <>
    <VStack
        justifyContent={'space-between'}
        h={'85vh'}
        paddingY={8}
        w={['97%', '100%', '90%','80%']}
        spacing={10}
    >
        <VStack
            w={'100%'}
            h={'100%'}
            overflowY={'scroll'}
            ref={scrollRef}
            spacing={5}
            alignItems={'flex-start'}
            scrollBehavior={'smooth'}
            paddingRight={{lg: 5}}
        > 
            {
                chatMessages.map(message => <ChatMessage type={message.type} content={message.content} time={message.time}/>)
            }
        </VStack>
        <HStack
            w={'100%'}
            border={'1px solid'}
            rounded={'md'}
            borderColor={'brand.gray'}
            _focusWithin={{
                borderColor: 'brand.main'
            }}
            paddingY={1.5}
            paddingX={2}
            backgroundColor={'brand.light'}
        >
            <Input 
                placeholder={'Write a message...'}
                border={'none'}
                focusBorderColor={'transparent'}
                w={'100%'}
                fontWeight={400}
                fontSize={'small'}
                color={'brand.main'}
                fontFamily={'Poppins'}
                ref={messageRef}
                defaultValue={''}
                onKeyDown={(e) => e.keyCode === 13 ? sendMessage() : ''}
            />
            <HStack
                paddingX={10}
                spacing={4}
            >
                <IconButton
                    aria-label='Send'
                    background={'brand.main'}
                    onClick={() => sendMessage()}
                    disabled={messageRef?.current?.value.length === 0}
                >
                    <Image
                        src={send}
                    />  
                </IconButton>
                <Image
                    cursor={'pointer'}
                    src={attachment}
                />
            </HStack>
        </HStack>
        </VStack>
    </>
  )
}

export default Chat