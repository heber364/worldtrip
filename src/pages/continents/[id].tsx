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
import { ParsedUrlQuery } from "querystring";
import { Gradient } from "../../components/Gradient";

type City = {
  name: string;
  country: string;
  image: string;
  icon: string;
};

interface ContinentProps {
  continent: {
    title: string;
    image: string;
    content: string;
    countries: number;
    languages: number;
    citiesGlobalTop: number;
    cities: City[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Box
        position="relative"
        bgImage={`url(/images/${continent.image})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        h={{ base: "150px", sm: "250px", md: "350px", xl: "500px" }}
        w="100%"
      >
        <Flex
          maxW="1240px"
          h="100%"
          m="0 auto"
          p={{ base: "0", md: "0 0 40px 40px" }}
          alignItems={{ base: "center", md: "end" }}
          justifyContent={{ base: "center", md: "unset" }}
        >
          <Heading
            as="h1"
            color="white"
            fontSize={{ base: "28px", sm: "36px", md: "48px" }}
            zIndex="1"
          >
            {continent.title}
          </Heading>
        </Flex>
        <Gradient />
      </Box>
      <Flex
        justifyContent="space-between"
        maxW="1240px"
        alignItems={{ base: "flex-start", xl: "center" }}
        m="0 auto"
        p={{
          base: "24px 16px",
          sm: "42px 32px",
          md: "54px 36px",
          xl: "60px 40px",
        }}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <Text
          maxW={{ base: "unset", xl: "600px" }}
          fontSize={{ base: "14px", sm: "18", md: "24px" }}
          display="block"
          textAlign="justify"
        >
          {continent.content}
        </Text>
        <HStack spacing="60px" mt={{ base: "20px", xl: "unset" }}>
          <Stack align={{ base: "flex-start", md: "center" }}>
            <Text
              as="b"
              fontSize={{ base: "24px", sm: "32px", md: "38", xl: "48px" }}
              color="yellow"
            >
              {continent.countries}
            </Text>
            <Text
              as="span"
              fontSize={{ base: "18px", sm: "20px", md: "24px" }}
              fontWeight={{ base: "400", sm: "500", xl: "600" }}
              color="gray.700"
            >
              países
            </Text>
          </Stack>
          <Stack align={{ base: "flex-start", md: "center" }}>
            <Text
              as="b"
              fontSize={{ base: "24px", sm: "32px", md: "38", xl: "48px" }}
              color="yellow"
            >
              {continent.languages}
            </Text>
            <Text
              as="span"
              fontSize={{ base: "18px", sm: "20px", md: "24px" }}
              fontWeight={{ base: "400", sm: "500", xl: "600" }}
              color="gray.700"
            >
              línguas
            </Text>
          </Stack>
          <Stack align={{ base: "flex-start", md: "center" }}>
            <Text
              as="b"
              fontSize={{ base: "24px", sm: "32px", md: "38", xl: "48px" }}
              color="yellow"
            >
              27
            </Text>
            <Text
              as="span"
              fontSize={{ base: "18px", sm: "20px", md: "24px" }}
              fontWeight={{ base: "400", sm: "500", xl: "600" }}
              color="gray.700"
            >
              cidades +100
            </Text>
          </Stack>
        </HStack>
      </Flex>
      <Box
        maxW="1240px"
        m="0 auto"
        p={{
          base: "24px 16px",
          sm: "42px 32px",
          md: "54px 36px",
          xl: "40px 40px",
        }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "36px" }}
          color="gray.700"
          mb="40px"
          fontWeight={{ base: "500", lg: "600" }}
        >
          Cidades +100
        </Heading>

        <Wrap spacing="45px" justify={{ base: "center", lg: "flex-start" }}>
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
  const response = await await fetch(`http://localhost:3333/continents`);
  const data = await response.json();

  const paths = data.map((continent: { id: string }) => {
    return { params: { id: continent.id } };
  });
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const response = await await fetch(`http://localhost:3333/continents/${id}`);
  const data = await response.json();

  return {
    props: {
      continent: data,
    },
  };
};
