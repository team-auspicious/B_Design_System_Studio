import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../component/Header";

export const Home = () => {
  return (
    <Box w="100%">
      <Header />
      <Flex w="100%" h="600px" justify="center" align="center">
        <Text>오른쪽 상단에서 메뉴를 선택해주세요.</Text>
      </Flex>
    </Box>
  );
};
