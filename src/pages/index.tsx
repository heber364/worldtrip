import { Carousel } from "../components/Carousel";
import {
  Box,
  Flex,
  Stack,
  Text,
  Image,
  HStack,
  Center,
  Divider,
  Wrap,
  WrapItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { CircleIcon } from "../components/Icons/CircleIcon";
import { DrinkIcon } from "../components/Icons/DrinkIcon";
import { SurfIcon } from "../components/Icons/SurfIcon";
import { BuildingIcon } from "../components/Icons/BuildingIcon";
import { MuseumIcon } from "../components/Icons/MuseumIcon";
import { EarthIcon } from "../components/Icons/EarthIcon";

export default function Home() {
  return (
    <>
      <Box
        bgImage="url('/images/Background.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={{base:"165px", sm:"335px"}}
        w="100%"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          maxW="1160px"
          h="100%"
          m="0 auto"
          p={{base:"0 16px", sm: "0 40px"}}
        >
          <Box>
            <Stack spacing="2" m="auto 0">
              <Text
                as="h1"
                color="white"
                fontSize={{base:"20px",sm: "36px"}}
                lineHeight={{base: "30px", sm:"54px"}}
                fontWeight="500"
                maxW="426px"
              >
                5 Continentes, infinitas possibilidades.
              </Text>
              <Text 
                as="p" 
                fontSize={{base:"14px", sm:"20px"}} 
                color="gray.200" 
                maxW="524px"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>
          </Box>

          <Box>
            <Image
              display={{ base: "none", lg: "block" }}
              src="/images/Airplane.png"
              alt="Avião"
              transform="rotate(3deg) translateY(60px)"
            />
          </Box>
        </Flex>
      </Box>
      <Box p={{ base: "36px 5px", sm: "114px 0" }} m="0 auto" maxW="1160px">
        <List
          w="100%"
          display="flex"
          flexWrap="wrap"
          rowGap="30px"
          columnGap={{base:"70px", sm:"130px"}}
          justifyContent="center"
          
          p="0 40px"
          
        >
          <ListItem
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight={{base:"500",sm:"600"}}
            color="gray.700"
            textAlign="center"
          >
            <ListIcon
              as={CircleIcon}
              color="yellow"
              display={{ base: "", sm: "none" }}
            />
            <ListIcon
              as={DrinkIcon}
              color="yellow"
              display={{ base: "none", sm: "block" }}
              boxSize="85px"
              m="0 auto"
              mb="25px"
            />
            vida noturna
          </ListItem>
          <ListItem
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight={{base:"500",sm:"600"}}
            color="gray.700"
            textAlign="center"
          >
            <ListIcon
              as={CircleIcon}
              color="yellow"
              display={{ base: "", sm: "none" }}
            />
            <ListIcon
              as={SurfIcon}
              color="yellow"
              display={{ base: "none", sm: "block" }}
              boxSize="85px"
              m="0 auto"
              mb="25px"
            />
            praia
          </ListItem>
          <ListItem
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight={{base:"500",sm:"600"}}
            color="gray.700"
            textAlign="center"
          >
            <ListIcon
              as={CircleIcon}
              color="yellow"
              display={{ base: "", sm: "none" }}
            />
            <ListIcon
              as={BuildingIcon}
              color="yellow"
              display={{ base: "none", sm: "block" }}
              boxSize="85px"
              m="0 auto"
              mb="25px"
            />
            moderno
          </ListItem>
          <ListItem
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight={{base:"500",sm:"600"}}
            color="gray.700"
            textAlign="center"
          >
            <ListIcon
              as={CircleIcon}
              color="yellow"
              display={{ base: "", sm: "none" }}
            />
            <ListIcon
              as={MuseumIcon}
              color="yellow"
              display={{ base: "none", sm: "block" }}
              boxSize="85px"
              m="0 auto"
              mb="25px"
            />
            clássico
          </ListItem>
          <ListItem
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight={{base:"500",sm:"600"}}
            color="gray.700"
            textAlign="center"
          >
            <ListIcon
              as={CircleIcon}
              color="yellow"
              display={{ base: "", sm: "none" }}
            />
            <ListIcon
              as={EarthIcon}
              color="yellow"
              display={{ base: "none", sm: "block" }}
              boxSize="85px"
              m="0 auto"
              mb="25px"
            />
            e mais...
          </ListItem>
        </List>
      </Box>
      <Center>
        <Divider orientation="horizontal" w="90px" borderColor="gray.700" />
      </Center>
      <Box p={{base:"24px 0", sm:"55px 0"}}>
        <Center>
          <Stack alignItems="center">
            <Text fontSize={{base:"20px", sm:"28px", md:"36px"}} fontWeight="500" color="gray.700">
              Vamos nessa?
            </Text>
            <Text fontSize={{base:"20px", sm:"28px", md:"36px"}} fontWeight="500" color="gray.700">
              Então escolha seu continente
            </Text>
          </Stack>
        </Center>
      </Box>
      <Carousel />
    </>
  );
}
