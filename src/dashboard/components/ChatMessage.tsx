import { HStack, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'

const ChatMessage: FC<{ type: string, content: string, time: string }> = ({ type, content, time }) => {

    const localeTime = (time: string): string =>
    {
        let hm = time.split(':');

        hm[1].length === 1 ? hm[1] = `0${hm[1]}` : hm[1];

        if (Number(hm[0]) === 0)
        {
            hm[0] = String(12);
        }
        
        if (Number(hm[0]) > 12)
        {
            hm[0] = String(Number(hm[0]) - 12);
            hm[1] = hm[1] + ' PM';
        }

        else
            hm[1] += ' AM'

        return hm.join(':');
    }

    return (
        <HStack
            alignItems={'flex-start'}
            flexDir={type === 'bot' ? 'row-reverse' : 'row'}
            marginLeft={type === 'bot' ? 'auto' : ''}
        >
            <HStack
                w={10}
                h={10}
                rounded={'full'}
                background={type !== 'bot' ? 'brand.main' : '#E7E7E7'}
                justifyContent={'center'}
                fontWeight={400}
            >
                <Text
                    color={type === 'bot' ? 'brand.main' : 'brand.light'}
                >
                    {type !== 'bot' ? 'U' : 'B'}
                </Text>
            </HStack>
            <VStack
                alignItems={'flex-start'}
            >
                <Text
                    fontSize={'small'}
                    border={'1px solid'}
                    color={type !== 'bot' ? 'brand.main' : 'brand.light'}
                    paddingX={4}
                    paddingY={2.5}
                    rounded={'md'}
                    backgroundColor={type === 'bot' ? 'brand.main' : 'brand.light'}
                    fontFamily={'Poppins'}
                    textOverflow={'wrap'}
                >
                    {content}
                </Text>
                <Text
                    fontSize={'x-small'}
                    fontFamily={'Poppins'}
                    color={'brand.gray'}
                    marginLeft={type === 'bot' ? 'auto' : ''}
                >
                    {localeTime(time)}
                </Text>
            </VStack>
        </HStack>
    )
}

export default ChatMessage