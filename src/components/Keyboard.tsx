import { useContext } from "react";
import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Style } from "./Style";
import { COLORS } from "./Colors";
import Button from "./Button";
export default function KeyBoard() {
    const [firstNumber, setFirstNumber] = React.useState("");

    const [secondNumber, setSecondNumber] = React.useState("");

    const [operation, setOperation] = React.useState("");

    const [result, setResult] = React.useState<Number | null>(null);
    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    }
    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    }
    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    }
    const getResult = () => {
        switch (operation) {
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    }
    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Style.screenFirstNumber, { color: COLORS.result }] : [Style.screenFirstNumber, { fontSize: 50, color: COLORS.result }]}>{result?.toString()}</Text>
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={Style.screenFirstNumber}>{firstNumber}</Text>
        }
        if (firstNumber === "") {
            return <Text style={Style.screenFirstNumber}>{"0"}</Text>
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[Style.screenFirstNumber, { fontSize: 70 }]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[Style.screenFirstNumber, { fontSize: 50 }]}>
                    {firstNumber}
                </Text>
            );
        }
    }
    return (
        <View style={Style.viewBottom}>
            <View style={{ height: 120, width: "90%", justifyContent: "flex-end", alignSelf: "center" }}>
                <Text style={Style.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{ color: "purple", fontSize: 50, fontWeight: "500", }}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Style.row}>
                <Button title="C" isGray onPress={clear} />
                <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <Button title="%" isGray onPress={() => handleOperationPress("%")} />
                <Button title="/" isGray onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Style.row}>
                <Button title="7" isGray onPress={() => handleNumberPress("7")} />
                <Button title="8" isGray onPress={() => handleNumberPress("8")} />
                <Button title="9" isGray onPress={() => handleNumberPress("9")} />
                <Button title="*" isBlue onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Style.row}>
                <Button title="4" isGray onPress={() => handleNumberPress("4")} />
                <Button title="5" isGray onPress={() => handleNumberPress("5")} />
                <Button title="6" isGray onPress={() => handleNumberPress("6")} />
                <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Style.row}>
                <Button title="1" isGray onPress={() => handleNumberPress("1")} />
                <Button title="2" isGray onPress={() => handleNumberPress("2")} />
                <Button title="3" isGray onPress={() => handleNumberPress("3")} />
                <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Style.row}>
                <Button title="0" isGray onPress={() => handleNumberPress("0")} />
                <Button title="." isGray onPress={() => handleNumberPress(".")} />
                <Button title="%" isGray onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title="=" isBlue onPress={() => getResult()} />
            </View>
        </View>
    )
}