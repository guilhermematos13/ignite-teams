import { TouchableOpacityProps } from "react-native";
import { Container, IconStyled, TextStyled } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconStyled />
      <TextStyled>{title}</TextStyled>
    </Container>
  );
}
