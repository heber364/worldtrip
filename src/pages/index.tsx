import { Header } from "../components/Header";
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
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Box
        bgImage="url('/images/Background.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="335px"
        w="100%"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          maxW="calc(1160px + 4rem)"
          h="100%"
          m="0 auto"
          p="0 4rem"
        >
          <Box>
            <Stack spacing="2" m="auto 0">
              <Text
                as="h1"
                color="white"
                fontSize="36px"
                fontWeight="500"
                maxW="426px"
              >
                5 Continentes, infinitas possibilidades.
              </Text>
              <Text as="p" fontSize="20px" color="gray.200" maxW="524px">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>
          </Box>

          <Box>
            <Image   
              src="/images/Airplane.png"
              alt="Avião"
              transform="rotate(3deg) translateY(60px)"
            />
          </Box>
        </Flex>
      </Box>
			<Box 
				p="114px 0"
			>
				<HStack alignItems="center" justifyContent="center" spacing="130px">
					<Stack alignItems="center" justifyContent="center">
						<Image src="/images/cocktail.png"/>
						<Text mt="25px" fontSize="24px" fontWeight="600" color="gray.700" >vida noturna</Text>
					</Stack>
					<Stack alignItems="center" justifyContent="center">
						<Image src="/images/praia.png"/>
						<Text mt="25px" fontSize="24px" fontWeight="600" color="gray.700" >praia</Text>
					</Stack>
					<Stack alignItems="center" justifyContent="center">
						<Image src="/images/moderno.png"/>
						<Text mt="25px" fontSize="24px" fontWeight="600" color="gray.700" >moderno</Text>
					</Stack>
					<Stack alignItems="center" justifyContent="center">
						<Image src="/images/museum.png"/>
						<Text mt="25px" fontSize="24px" fontWeight="600" color="gray.700" >clássico</Text>
					</Stack>
					<Stack alignItems="center" justifyContent="center">
						<Image src="/images/earth.png"/>
						<Text mt="25px" fontSize="24px" fontWeight="600" color="gray.700" >e mais...</Text>
					</Stack>
				</HStack>
			</Box>
			<Center>
				<Divider orientation="horizontal" w="90px" borderColor="gray.700"/>
			</Center>
			<Box 
				p="55px 0"
			>
				<Center>
					<Stack alignItems="center">
						<Text fontSize="36px" fontWeight="500" color="gray.700" >Vamos nessa?</Text>
						<Text fontSize="36px" fontWeight="500" color="gray.700">Então escolha seu continente</Text>
					</Stack>	
				</Center>	
			</Box>
			<Carousel />
    </>

  );
}