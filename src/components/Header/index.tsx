import { Flex, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export function Header() {
  return (
    <Flex
      as="header"
      h="100px"
      w="100%"
      p=" 0 150px"
      alignItems="center"
      justifyContent="center"
    >
      <ChevronLeftIcon 
        mr="auto"
        w={6}
        h={6}

      />
      <Image src="/images/logo.png" mr="auto"/>
    </Flex>
  );
}
