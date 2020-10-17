import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";


export default class Main extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.tableContainer}>
                    <Text>TODO</Text>
                </View>
                <StatusBar style="auto" />
            </SafeAreaView>
        );
    }
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
