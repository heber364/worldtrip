import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  HStack,
  Wrap,
} from "@chakra-ui/react";

import { CardCity } from "../../components/CardCity";

import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from 'querystring'

type City = {
  name: string,
  country: string,
  image: string,
  icon: string,
}

interface ContinentProps {
  continent: {
    title: string;
    image: string;
    content: string;
    countries: number;
    languages: number;
    citiesGlobalTop: number;
    cities: City[];
  }
}

export default function Continent({ continent }: ContinentProps) {
  console.log(continent)
  
  return (
    <>
      <Box
        bgImage={`url(/images/${continent.image})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        h="500px"
        w="100%"
      >
        <Flex
          maxW="1240px"
          h="100%"
          m="0 auto"
          p="0 0 40px 40px"
          alignItems="end"
        >
          <Heading as="h1" color="white" fontSize="48px">
            {continent.title}
          </Heading>
        </Flex>
      </Box>
      <Flex
        justifyContent="space-between"
        maxW="1240px"
        alignItems="center"
        m="0 auto"
        p=" 80px 40px"
      >
        <Text maxW="600px" fontSize="24px" display="block" textAlign="justify">
          {continent.content}
        </Text>
        <HStack spacing="60px">
          <Stack align="center">
            <Text as="b" fontSize="48px" color="yellow">
              {continent.countries}
            </Text>
            <Text as="span" fontSize="24px" fontWeight="600" color="gray.700">
              países
            </Text>
          </Stack>
          <Stack align="center">
            <Text as="b" fontSize="48px" color="yellow">
              {continent.languages}
            </Text>
            <Text as="span" fontSize="24px" fontWeight="600" color="gray.700">
              línguas
            </Text>
          </Stack>
          <Stack align="center">
            <Text as="b" fontSize="48px" color="yellow">
              27
            </Text>
            <Text as="span" fontSize="24px" fontWeight="600" color="gray.700">
              cidades +100
            </Text>
          </Stack>
        </HStack>
      </Flex>
      <Box maxW="1240px" m="0 auto" p="0 40px 40px 40px">
        <Heading as="h2" fontSize="36px" color="gray.700" mb="40px">
          Cidades +100
        </Heading>

        <Wrap spacing="45px">
          {continent.cities?.map((city) => (
            <CardCity 
              key={city.name}
              city={city.name}
              img={city.image}
              country={city.country}
              countryIcon={city.icon}
            />
          ))}
        </Wrap>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await (await fetch(`http://localhost:3333/continents`))
  const data = await response.json()

  const paths = data.map((continent: { id: string; }) => {
      return { params: { id: continent.id } }
  })
  return{
    paths,
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const response = await (await fetch(`http://localhost:3333/continents/${id}`))
  const data = await response.json()

  return{
   props:{
     continent: data
   }
  }
}