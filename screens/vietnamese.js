import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";
import { setLanguage } from "../chosenlanguage";
import { Alert } from "react-native";

export default function App() {
    const navigation = useNavigation();
    const languages = [
        "🇻🇳 Hanoi",
        "🇻🇳 Hanoi",
        "🇻🇳 Hanoi",
        "🇻🇳 Hanoi",
        "🇻🇳 Hanoi",
        "🇻🇳 Hanoi",
    ];

    const ButtonPress = (index) => {
        switch (index["index"]) {
            case 0: {
                navigation.navigate("Home");
                Alert.alert("Saved Changes");
                setLanguage("vietnamese");
                break;
            }
            case 1: {
                navigation.navigate("Home");
                Alert.alert("Saved Changes");
                setLanguage("vietnamese");
                break;
            }
            case 2: {
                navigation.navigate("Home");
                Alert.alert("Saved Changes");
                setLanguage("vietnamese");
                break;
            }
            case 3: {
                navigation.navigate("Home");
                Alert.alert("Saved Changes");
                setLanguage("vietnamese");
                break;
            }
            case 4: {
                navigation.navigate("Home");
                Alert.alert("Saved Changes");
                setLanguage("vietnamese");
                break;
            }
            case 5: {
                navigation.navigate("Home");
                Alert.alert("Saved Changes");
                setLanguage("vietnamese");
                break;
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tableContainer}>
                <FlatGrid
                    itemDimension={130}
                    data={languages}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => ButtonPress({ index })}
                        >
                            <Text style={styles.text}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    tableContainer: {
        padding: 20,
        flexDirection: "row",
    },
    button: {
        elevation: 8,
        backgroundColor: "#6D8591",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },
});
