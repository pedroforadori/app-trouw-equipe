import { View, Text, TextInput, Button } from "react-native";
import Checkbox from "expo-checkbox";

import {
  Container,
  BackgroundImage,
  CarImage,
  LogoImage,
  ContainerLogo,
  Form,
  Input,
  ButtonLogin,
  CheckboxContainer,
  TextCheckbox,
} from "./styles";
import { useState } from "react";

export default function Login() {
  const [isChecked, setChecked] = useState(false);
  return (
    <Container>
      <ContainerLogo>
        <LogoImage source={require("../../../assets/logo.png")} />
      </ContainerLogo>
      <Form>
        <Input selectionColor={"#fff"} placeholder="E-mail" />
        <Input selectionColor={"#fff"} placeholder="Password" />
        <CheckboxContainer>
          <Checkbox
            style={{
              borderColor: "#ffffff",
              width: 24,
              height: 24,
            }}
            value={isChecked}
            onValueChange={setChecked}
          />
          <TextCheckbox>Lembrar senha</TextCheckbox>
        </CheckboxContainer>

        <ButtonLogin title="Entrar" />
      </Form>
      <View>
        <BackgroundImage source={require("../../../assets/bg-login.png")} />
      </View>
      <CarImage source={require("../../../assets/login-car.png")} />
    </Container>
  );
}
