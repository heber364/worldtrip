import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  HStack,
  Wrap,
} from "@chakra-ui/react";
import { CardCity } from "../components/CardCity";

export default function Continent() {
  return (
    <>
      <Box
        bgImage="url('/images/europa2.png')"
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
            Europa
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
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack spacing="60px">
          <Stack align="center">
            <Text as="b" fontSize="48px" color="yellow">
              50
            </Text>
            <Text as="span" fontSize="24px" fontWeight="600" color="gray.700">
              países
            </Text>
          </Stack>
          <Stack align="center">
            <Text as="b" fontSize="48px" color="yellow">
              60
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
          <CardCity
            img="londres.png"
            city="Londres"
            country="Reino Unido"
            countryIcon="londresIcon.png"
          />
          <CardCity
            img="paris.png"
            city="Paris"
            country="França"
            countryIcon="parisIcon.png"
          />
          <CardCity
            img="roma.png"
            city="Roma"
            country="Itália"
            countryIcon="romaIcon.png"
          />
          <CardCity
            img="praga.png"
            city="Praga"
            country="República Tcheca"
            countryIcon="pragaIcon.png"
          />
          <CardCity
            img="amsterda.png"
            city="Amsterdã"
            country="Holanda"
            countryIcon="amsterdaIcon.png"
          />
        </Wrap>
      </Box>
    </>
  );
}
