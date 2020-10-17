import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Button,
    Alert,
} from "react-native";

export default class StayingSafe extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Staying Safe</Text>
                </View>
                <View style={styles.image}>
                    <Image source={require("../assets/icon.png")} />
                </View>
                <View style={styles.button}>
                    <Button title="Enter" onPress={() => Alert.alert("TODO")} />
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
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        padding: 20,
    },
    titleContainer: { padding: 20 },
    title: {
        fontWeight: "bold",
        fontSize: 48,
        letterSpacing: 2,
    },
    button: {
        paddingTop: 10,
    },
});
