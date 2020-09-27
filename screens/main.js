import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
    const navigation = useNavigation();
    function Redirect(value) {
        navigation.navigate(value);
    }
    const onPressHumanTrafficking = () => Redirect("HumanTrafficking");
    const onPressStayingSafe = () => Redirect("StayingSafe");
    const onPressFindingHelp = () => Redirect("FindingHelp");
    const onPressInformation = () => Redirect("Information");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Staying Safe</Text>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>
                    An app that protects, educates and empowers all against the
                    global issue of human trafficking.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPressInformation}
                >
                    <Text style={styles.buttonText}>General Information</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPressHumanTrafficking}
                >
                    <Text style={styles.buttonText}>Human Trafficking</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPressStayingSafe}
                >
                    <Text style={styles.buttonText}>Staying Safe</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPressFindingHelp}
                >
                    <Text style={styles.buttonText}>Finding Help</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleContainer: { padding: 10 },
    title: {
        fontWeight: "bold",
        fontSize: 48,
        letterSpacing: 2,
    },
    horizontalLine: {
        padding: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        alignSelf: "stretch",
    },
    paragraphContainer: {
        padding: 15,
    },
    paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        padding: 10,
    },
    button: {
        elevation: 8,
        borderColor: "#6D8591",
        borderWidth: 5,
        height: 50,
        width: 200,
    },
    buttonText: {
        padding: 10,
        fontSize: 18,
        color: "#6D8591",
        fontWeight: "bold",
        alignSelf: "center",
        justifyContent: "center",
    },
});
