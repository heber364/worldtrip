import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Gradient } from "./Gradient";

import Link from "next/link";

interface DataProps {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export function Carousel() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    api.get("/slides").then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data)
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
        {data.map((slide) => (
          <SwiperSlide key={slide.slug}>
            <Link href={`/continents/${slide.slug}`}>
              <Box
                bgImage={`url(/images/${slide.image})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center top -100px"
                h="450px"
              >
                <Center h="100%">
                  <Stack alignItems="center">
                    <Text
                      as="b"
                      fontSize="48px"
                      fontWeight="700"
                      color="white"
                      zIndex="1"
                    >
                      {slide.title}
                    </Text>
                    <Text
                      as="p"
                      fontSize="24px"
                      fontWeight="700"
                      color="white"
                      zIndex="1"
                    >
                      {slide.description}
                    </Text>
                  </Stack>
                </Center>
                <Gradient />
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}


