
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
              display={{base:'none',lg:'block'}}  
              src="/images/Airplane.png"
              alt="Avião"
              transform="rotate(3deg) translateY(60px)"
            />
          </Box>
        </Flex>
      </Box>
			<Box 
				p="114px 0"
        m="0 auto"
			>

            <List display="flex" flexWrap="wrap" gap="130px">
              <ListItem  fontSize="24px" fontWeight="600" color="gray.700" >
                <ListIcon as={CircleIcon} color='yellow' display={{base:'',lg:'none'}} />
                <ListIcon as={DrinkIcon} color="yellow" display={{base:'none', lg:'block'}} boxSize="85px" m="0 auto" mb="25px"/>
                vida noturna
              </ListItem>
              <ListItem  fontSize="24px" fontWeight="600" color="gray.700" >
                <ListIcon as={CircleIcon} color='yellow' display={{base:'',lg:'none'}} />
                <ListIcon as={SurfIcon} color="yellow" display={{base:'none', lg:'block'}} boxSize="85px" m="0 auto" mb="25px"/>
                praia
              </ListItem>
              <ListItem  fontSize="24px" fontWeight="600" color="gray.700" >
                <ListIcon as={CircleIcon} color='yellow' display={{base:'',lg:'none'}} />
                <ListIcon as={BuildingIcon} color="yellow" display={{base:'none', lg:'block'}} boxSize="85px" m="0 auto" mb="25px"/>
                moderno
              </ListItem>
              <ListItem  fontSize="24px" fontWeight="600" color="gray.700" >
                <ListIcon as={CircleIcon} color='yellow' display={{base:'',lg:'none'}} />
                <ListIcon as={MuseumIcon} color="yellow" display={{base:'none', lg:'block'}} boxSize="85px" m="0 auto" mb="25px"/>
                clássico
              </ListItem>
              <ListItem  fontSize="24px" fontWeight="600" color="gray.700" >
                <ListIcon as={CircleIcon} color='yellow' display={{base:'',lg:'none'}} />
                <ListIcon as={EarthIcon} color="yellow" display={{base:'none', lg:'block'}} boxSize="85px" m="0 auto" mb="25px"/>
                e mais...
              </ListItem>

            </List>
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
