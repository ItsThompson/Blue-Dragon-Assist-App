import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Button,
    Alert,
    ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { lang } from "../chosenlanguage";
const textsByLanguageAndTitle = require("../services/textsByLanguagesAndTitle");

export default function App() {
    const [isLoading, setLoading] = useState(true);
    let chosenLanguage = lang;
    const [title, setTitle] = useState("undefined");
    const [paragraph, setParagraph] = useState("undefined");

    useEffect(() => {
        textsByLanguageAndTitle(chosenLanguage, "human_trafficking_title")
            .then((output) => {
                // console.log(output);
                setTitle(String(output[0]["data"]));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // setLoading(false);
                console.log("Title");
            });
    }, []);
    useEffect(() => {
        textsByLanguageAndTitle(chosenLanguage, "human_trafficking_p1")
            .then((output) => {
                // console.log(output);
                setParagraph(String(output[0]["data"]));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Paragraph");
                setLoading(false);
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    <View style={styles.spacer}></View>
                    <View style={styles.titleContainer}>
                        {/* human_trafficking_title */}
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.paragraphContainer}>
                        {/* human_trafficking_p1 */}
                        <Text style={styles.paragraph}>{paragraph}</Text>
                    </View>
                    <View style={styles.horizontalLine}></View>
                </View>
            )}
        </SafeAreaView>
    );
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
        textAlign: "center",
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
