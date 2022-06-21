import React from "react";
import {  HStack, Checkbox,Input,Button, Box, Icon, Stack, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Example = () => {
  const [show, setShow] = React.useState(false);
  return <Stack space={4} w="100%" alignItems="center">
      <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Nome" />
      <Input w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Senha" />
      <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked>
        Manter-me conectado
      </Checkbox>
      <Button >Logar</Button>
    </Stack>;  
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
    