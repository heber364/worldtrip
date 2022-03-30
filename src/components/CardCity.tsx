import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

interface CardCityProps{
    img: string,
    city: string,
    country: string,
    countryIcon: string,
}

export function CardCity({img, city, country, countryIcon }: CardCityProps) {
  return (
    <Box
      w="256px"
      bgImg={`url(/images/${img})`}
      bgRepeat="no-repeat"
      borderRadius="4px"
    >
      <Flex
        w="100%"
        mt="173px"
        border="1px solid"
        borderTop="none"
        borderColor="yellow"
        borderBottomRadius="4px"
        alignItems="center"
        justifyContent="space-between"
        p="26px 26px"
      >
        <Stack alignItems="flex-start">
          <Text as="b"fontSize="20px" fontWeight="600" color="gray.700">{city}</Text>
          <Text as="span" fontSize="16px" fontWeight="500" color="gray.400">{country}</Text>
        </Stack>
        <Image src={`/images/${countryIcon}`}></Image>
      </Flex>
    </Box>
  );
}
