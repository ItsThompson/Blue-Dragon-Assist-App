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

export default function App() {
    const navigation = useNavigation();
    const languages = [
        "🇬🇧 English",
        "🇫🇷 French",
        "🇻🇳 Vietnamese",
        // "🏳️ Language",
        // "🏳️ Language",
        // "🏳️ Language",
    ];

    function ButtonPress(item) {
        switch(item){
            case languages[0]: {
                // English
                // navigation.navigate("Main");
                navigation.navigate("Language");
                break;
            }
            case languages[1]: {
                // French
                navigation.navigate("Contact");
                break;
            }
            case languages[2]: {
                // French
                navigation.navigate("Vietnamese");
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
                            onPress={ButtonPress({item})}
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