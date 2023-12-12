import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #3b3f5c;
`;

export const BackgroundImage = styled.Image`
  flex: 1;
  width: 950px;
  border-bottom-left-radius: 400px;
  border-bottom-right-radius: 400px;
  margin-bottom: 50px;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 180px;
  bottom: 140px;
  position: relative;
`;

export const LogoImage = styled.Image`
  width: 310px;
  height: 80px;
  resizemode: stretch;
`;

export const ContainerLogo = styled.View`
  position: absolute;
  top: 150px;
  z-index: 1;
`;

export const Form = styled.View`
  position: absolute;
  top: 300px;
  z-index: 1;
  width: 90%;
  gap: 56;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#ffffff",
})`
  color: #ffffff;
  border-bottom-color: #ffffff;
  border-bottom-width: 2px;
  font-size: 30px;
`;

export const ButtonLogin = styled.Button`
  background: #3b3f5c;
  color: #ffffff;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
  z-index: 1;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8;
`;

export const TextCheckbox = styled.Text`
  color: #ffffff;
  font-size: 24;
`;