import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";
export const Style = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: COLORS.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: COLORS.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: COLORS.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: COLORS.black,
    },
    row: {
        maxWidth: "100%",
        flexDirection: "row"
    },
    viewBottom: {
        position: "absolute",
        bottom: 50
    },
    screenFirstNumber: {
        fontSize: 96,
        color: COLORS.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    screenSecondNumber: {
        fontSize: 40,
        color: COLORS.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    }
});