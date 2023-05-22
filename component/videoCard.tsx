import {
    Box, Flex, Text, Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Center
} from "@chakra-ui/react"
import youtubeIcon from "../assets/youtubesmalll.svg"

import NextImage from "next/image"

const VideoCard = ({ data }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <Flex h="90px" borderRadius="6px" bg="#FFFFFF" p="8px" gap="16px" onClick={onOpen}>
        <Image h="74px" w="132px" borderRadius="6px" src={data.snippet.thumbnails.medium.url} alt="thumbnail" />
        <Box>
            <Text fontWeight="600" fontSize="14px" noOfLines={2} lineHeight="16px">{data.snippet.title}</Text>
            <Text fontWeight="500" fontSize="10px" color="#9499A6" mt="8px" lineHeight="10px">{data.snippet.channelTitle}</Text>
            <Flex mt="14px" justifyContent="space-between" color="#5D6067" fontWeight="500" fontSize="10px" lineHeight="10px">
                <Center>
                    <NextImage src={youtubeIcon} alt="yt" />
                    <Text ml="4px">Youtube.com</Text>
                </Center>
                <Text>views</Text>
            </Flex>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent h="100vh" bg="#202124" marginTop={0}  borderRadius={0}>
                <ModalBody >
                    <Center gap="16px" flexDirection="column" h="100%">
                        <iframe width="100%"
                            src={`https://www.youtube.com/embed/${data.id.videoId}`}>
                        </iframe>
                        <Box>
                            <Text color="white" fontWeight="600" fontSize="14px" noOfLines={2} lineHeight="16px">{data.snippet.title}</Text>
                            <Text fontWeight="500" fontSize="10px" color="white" mt="8px" lineHeight="10px">{data.snippet.channelTitle}</Text>
                            <Flex mt="14px" justifyContent="space-between" color="#9499A6" fontWeight="500" fontSize="10px" lineHeight="10px">
                                <Center>
                                    <NextImage src={youtubeIcon} alt="yt" />
                                    <Text ml="4px">Youtube.com</Text>
                                </Center>
                                <Text>views</Text>
                            </Flex>
                        </Box>
                    </Center>
                </ModalBody>

                <ModalFooter justifyContent={'space-between'}>
                    <Center as="a" bg="#2A8CFF" color="#FFFFFF" href={`https://www.youtube.com/watch?v=${data.id.videoId}`} h="34px" w="80px" borderRadius="20px"
                    ><Text>Visit</Text></Center>
                    <Center bg="#5D6067" color="#FFFFFF" h="34px" w="80px" borderRadius="20px"
                    as="button" mr="3px" onClick={onClose}>
                        Close
                    </Center>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Flex>
}

export default VideoCard