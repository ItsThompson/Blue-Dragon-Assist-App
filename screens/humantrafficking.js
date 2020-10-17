import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from "react-native";

export default class HumanTrafficking extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.spacer}></View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Staying Safe</Text>
                </View>
                <View style={styles.paragraphContainer}>
                    <Text style={styles.paragraph}>
                        Trafficking in persons is when men, women, or children are
                        deceived, coerced or sold, domestically and abroad, into
                        "slave-like" situations contrary to their desires, including
                        sexual exploitation, forced labor, victim's body parts,
                        forced marriage and other inhumane purposes.
                    </Text>
                </View>
                <View style={styles.horizontalLine}></View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center",
    },
    spacer: {
        padding: 10,
    },
    titleContainer: {
        padding: 10,
        borderColor: "#6D8591",
        borderWidth: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 48,
        letterSpacing: 2,
    },
    paragraphContainer: {
        padding: 15,
    },
    paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
    horizontalLine: {
        padding: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        alignSelf: "stretch",
    },
});
