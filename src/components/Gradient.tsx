import { Box } from "@chakra-ui/react";

export function Gradient() {
  return (
    <Box
      position="absolute"
      left="0"
      top="0"
      w="100%"
      h="100%"
      bgGradient="linear(to-b, gray.900,gray.900)"
      opacity="35%"
    />
  );
}
