import { useState } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
import useSearch from "../hooks/useSearch";
import logo from "../assets/logo.svg"
import searchIcon from "../assets/search.svg"
import nextIcon from "../assets/next.svg"
import prevIcon from "../assets/prev.svg"
import { Box, Center, Flex, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react';
import VideoCard from '../component/videoCard';
const Home: NextPage = () => {
  const [q, setQ] = useState<string>("")
  const [pageNo ,setPageNo] = useState<number>(1);
  const { data, search, nextPage, prevPage } = useSearch();

  const handelSearch = (page?: string) => {
    if(page === undefined){
      setPageNo(1)
    }
    search(q, page);
  }

  return (
    <Box>
      <Flex p="20px" >
        <Image src={logo} alt="logo" />
        <Text ml="8px">Simple Video Search Engine</Text>
      </Flex>

      <Center mx="10px" h="48px" bg="#FFF" borderRadius="6px">
        <InputGroup>
          <Input placeholder='Search' outline="none" border="none"
            _focusVisible={{ outline: "none", }}
            value={q} onChange={(e) => setQ(e.target.value)}
          />
          <InputRightAddon bg="#FFF" outline="none" border="none">
            <Image alt="search icon" src={searchIcon} />
          </InputRightAddon>
        </InputGroup>
      </Center>

      <Flex mt="16px" gap="8px" flexDirection="column">
        {data?.items?.map((item: any, index: number) => {
          return <VideoCard key={index} data={item} />
        })}
      </Flex>

      {(nextPage || prevPage) && <Center mt="20px" px="28px" mx="9px" h="48px" bg="#FFFFFF" borderRadius="6px"
        justifyContent={prevPage ? "space-between" : "center"}>

        {prevPage && <Center gap="4px" as="button" onClick={() => {
          handelSearch(prevPage)
          setPageNo(pageNo - 1)
        }
          }>
          <Image src={prevIcon} alt="prev"/>
          <Text
            fontSize="14px" fontWeight="600" lineHeight="16px" color="#2B2F39">Prev</Text>
        </Center>}
        
        {pageNo > 1 && <Text>{pageNo}</Text>}

        {nextPage && <Center gap="4px" as="button" onClick={() => {
          handelSearch(nextPage)
          setPageNo(pageNo + 1)

        }}>
          <Text
            fontSize="14px" fontWeight="600" lineHeight="16px" color="#2B2F39">Next</Text>
            <Image src={nextIcon} alt="next"/>
        </Center>}
      </Center>}

      {q !== "" && <Center h="36px" p="0 41px" borderRadius="33px" bg="#FFFFFF"
        as="button" onClick={() => handelSearch()} margin="auto" my="16px">
        <Image alt="search icon" src={searchIcon} />
        <Text ml="8px" fontWeight="500" lineHeight="16px" fontSize="14px" color="#2A8CFF">Search <strong>{q}</strong> on Google</Text>
      </Center>}
    </Box>
  )
}

export default Home
