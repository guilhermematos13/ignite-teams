import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  ${(props) => css`
    color: ${props.theme.COLORS.WHITE};
    background-color: ${props.theme.COLORS.GRAY_700};
    font-family: ${props.theme.FONT_FAMILY.REGULAR};
    font-size: ${props.theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding: 16px;
`;
