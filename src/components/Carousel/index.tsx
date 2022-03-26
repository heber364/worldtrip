import { Swiper, SwiperSlide } from "swiper/react";
import  { Gradient }  from "./gradient"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Center, Stack, Text } from "@chakra-ui/react";

export function Carousel() {
  return (
    <Box maxW="1240px" m="0 auto 40px auto">
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="carousel"
     >
        <SwiperSlide>
          <Box 
            bgImage="url('/images/europa.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="450px"
            >
              <Center h="100%">
                <Stack alignItems="center">
                  <Text as="b" fontSize="48px" fontWeight="700" color="white" zIndex="1">Europa</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white" zIndex="1">O continente mais antigo.</Text>
                </Stack>

              </Center>
              <Gradient />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box 
            bgImage="url('/images/norteamerica.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center top -100px"
            h="450px"
            >
              <Center h="100%">
                <Stack alignItems="center">
                  <Text as="b" fontSize="48px" fontWeight="700" color="white" zIndex="1">América do Norte</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white" zIndex="1">O continente dos "únicos americanos"</Text>
                </Stack>

              </Center>
              <Gradient />
              
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box 
            bgImage="url('/images/asia.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center top -100px"
            h="450px"
            >
              <Center h="100%">
                <Stack alignItems="center">
                  <Text as="b" fontSize="48px" fontWeight="700" color="white" zIndex="1">Asia</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white"  zIndex="1">O continente mais populoso.</Text>
                </Stack>
              </Center>
              <Gradient />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box 
            position="relative"
            bgImage="url('/images/africa.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center top -100px"
            h="450px"
            >
              
              <Center h="100%">
                <Stack alignItems="center">
                  <Text as="b" fontSize="48px" fontWeight="700" color="white" zIndex="1">África</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white" zIndex="1">O continente geralmente confundido com um país.</Text>
                </Stack>
              </Center> 
              <Gradient />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box 
            position="relative"
            bgImage="url('/images/southamerica.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center top -100px"
            h="450px"
            >
              
              <Center h="100%">
                <Stack alignItems="center">
                  <Text as="b" fontSize="48px" fontWeight="700" color="white" zIndex="1">América do sul</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white" zIndex="1">O continente cheio de riquezas naturais.</Text>
                </Stack>
              </Center> 
              <Gradient />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box 
            position="relative"
            bgImage="url('/images/oceania.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center top -100px"
            h="450px"
            >
              
              <Center h="100%">
                <Stack alignItems="center">
                  <Text as="b" fontSize="48px" fontWeight="700" color="white" zIndex="1">Oceania</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white" zIndex="1">O continente dos cangurus</Text>
                </Stack>
              </Center> 
              <Gradient />
          </Box>
        </SwiperSlide>
      </Swiper>

    </Box>
      
  );
}
