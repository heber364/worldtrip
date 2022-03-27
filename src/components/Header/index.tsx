import { Flex, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();

  let isHomeActive = false;
  if (String(asPath) === "/") {
    isHomeActive = true;
  }

  return isHomeActive ? (
    <Flex
      as="header"
      h="100px"
      w="100%"
      p=" 0 150px"
      alignItems="center"
      justifyContent="center"
    >
      <Image src="/images/logo.png" />
    </Flex>
  ) : (
    <Flex
      as="header"
      h="100px"
      w="100%"
      p=" 0 150px"
      alignItems="center"
      justifyContent="center"
    >
     <Link href="/">
       <ChevronLeftIcon cursor="pointer" mr="auto" w={6} h={6} />
      </Link> 

      <Image src="/images/logo.png" mr="auto" />
    </Flex>
  );
}
