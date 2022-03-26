import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Center, Stack, Text } from "@chakra-ui/react";


export function Carousel() {
  return (
    <Box maxW="1240px" m="0 auto 40px auto">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
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
                  <Text as="b" fontSize="48px" fontWeight="700" color="white">Europa</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white">O continente mais antigo.</Text>
                </Stack>

              </Center>
              
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box 
            bgImage="url('/images/europa.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="450px"
            >
              <Center h="100%">
                <Stack alignItems="center">
                  <Text as="b" fontSize="48px" fontWeight="700" color="white">Europa</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white">O continente mais antigo.</Text>
                </Stack>

              </Center>
              
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box 
            bgImage="url('/images/europa.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="450px"
            >
              <Center h="100%">
                <Stack alignItems="center">
                  <Text as="b" fontSize="48px" fontWeight="700" color="white">Europa</Text>
                  <Text as="p" fontSize="24px" fontWeight="700" color="white">O continente mais antigo.</Text>
                </Stack>

              </Center>
              
          </Box>
        </SwiperSlide>
      </Swiper>

    </Box>
      
  );
}
