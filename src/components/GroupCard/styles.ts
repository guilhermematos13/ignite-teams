import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    gap:20px;
    padding: 24px;
    margin-bottom: 12px;

    background: ${props => props.theme.COLORS.GRAY_500};
`

export const TextStyled = styled.Text`
    font-size: ${props => props.theme.FONT_SIZE.LG}px;
    color: ${props => props.theme.COLORS.GRAY_100};
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
`

export const IconStyled = styled(UsersThree).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_500,
    size: 32,
    weight: 'fill'
}))``