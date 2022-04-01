import { Box, Flex, Image } from "@chakra-ui/react";
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
      h={{ base: "50px", sm: "75px", md: "100px" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box maxW="1160px">
        <Link href="/">
          <Image
            src="./images/Logo.svg"
            cursor="pointer"
            w={{ base: "80px", sm: "140px", md: "unset" }}
          />
        </Link>
      </Box>
    </Flex>
  ) : (
      <Flex
        as="header"
        h={{ base: "50px", sm: "75px", md: "100px" }}
        p="0 20px"
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" alignItems="center" justifyContent="center"  w="100%" maxW="1160px">
          <Link href="/">
            <ChevronLeftIcon cursor="pointer" mr="auto" boxSize={{base: "4", sm:"8"}}/>
          </Link>
          <Link href="/">
            <Image src="/images/logo.png" mr="auto" cursor="pointer" w={{ base: "80px", sm: "140px", md: "unset" }} />
          </Link>
        </Box>
      </Flex>
  );
}
