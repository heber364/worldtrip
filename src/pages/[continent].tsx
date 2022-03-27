import { Box, Heading, SimpleGrid, Text, Flex, Stack, HStack } from "@chakra-ui/react";

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
          maxW="1200px"
          h="100%"
          m="0 auto"
          pl="40px"
          pb="40px"
          alignItems="end"
        >
          <Heading as="h1" color="white" fontSize="48px">
            Europa
          </Heading>
        </Flex>
      </Box>
      <SimpleGrid columns={2} spacing={10} >
        <Text>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack>
          <Stack>
            <Text as="b">50</Text>
            <Text as="span">países</Text>
          </Stack>
          <Stack>
            <Text as="b">50</Text>
            <Text as="span">países</Text>
          </Stack>
          <Stack>
            <Text as="b">50</Text>
            <Text as="span">países</Text>
          </Stack>
        </HStack>
      </SimpleGrid>
    </>
  );
}
