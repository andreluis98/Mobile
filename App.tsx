import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

const Example = () => {
  return <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "data:image/jpeg;base64,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"
          }} alt="image" />
          </AspectRatio>
          <Center bg="blue.500" _dark={{
          bg: "blue.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            SANTOS FUTEBOL CLUBE
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              A História do Santos FC
            </Heading>
            <Text fontSize="xs" _light={{
            color: "black.500"
          }} _dark={{
            color: "black.400"
          }} fontWeight="600" ml="-0.5" mt="-1">
            Um Breve Relato sobre o maior time do mundo!
            </Text>
          </Stack>
          <Text fontWeight="600">
              Santos Futebol Clube é um clube poliesportivo brasileiro da cidade de Santos, São Paulo! É Também a equipe com mais gols na história do futebol.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.100"
            }} fontWeight="400">
                1 Hora Atrás
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    