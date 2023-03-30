import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Style } from "./Style";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}
export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={
                isBlue ? Style.btnBlue : isGray ? Style.btnGray : theme === 'light' ? Style.btnLight : Style.btnDark
            }
            onPress={onPress} >
            <Text style={
                isBlue || isGray ? Style.smallTextLight : theme === "dark" ? Style.smallTextLight : Style.smallTextDark
            }>
                {title}
            </Text>
        </TouchableOpacity >
    )
}