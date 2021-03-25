import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Button,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { lang } from "../chosenlanguage";

const textsByLanguagesAndTitle = require("../services/textsByLanguagesAndTitle");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function App() {
    let chosenLanguage = lang;

    const [isLoading, setLoading] = useState(true);
    const [information_button, setInformation] = useState("undefined");
    const [contact_button, setContact] = useState("undefined");
    const [languages_button, setLanguage] = useState("undefined");

    useEffect(() => {
        textsByLanguagesAndTitle(chosenLanguage, "home_information")
            .then((output) => {
                setInformation(String(output[0]["data"]));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Information");
                // setLoading(false);
            });
    }, []);
    useEffect(() => {
        textsByLanguagesAndTitle(chosenLanguage, "home_contact")
            .then((output) => {
                setContact(String(output[0]["data"]));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Contact");
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        textsByLanguagesAndTitle(chosenLanguage, "home_languages")
            .then((output) => {
                setLanguage(String(output[0]["data"]));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Languages");
                setLoading(false);
            });
    }, []);
    const navigation = useNavigation();

    const Information = () => {
        if (lang !== null) {
            navigation.navigate("Main");
        } else {
            navigation.navigate("Languages");
        }
    };
    const Contact = () => {
        return navigation.navigate("Contact");
    };
    const Language = () => {
        return navigation.navigate("Languages");
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <SafeAreaView style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Staying Safe</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require("../assets/staySafe.png")}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Test"
                            onPress={() => navigation.navigate("Test")}
                        ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            // title="Information"
                            title={information_button}
                            onPress={() => Information()}
                        ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            // title="Contact"
                            title={contact_button}
                            onPress={() => Contact()}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            // title="Switch Languages"
                            title={languages_button}
                            onPress={() => Language()}
                        ></Button>
                    </View>
                </SafeAreaView>
            )}
        </View>
    );
}
export default class Home extends React.Component {
    render() {
        return <App />;
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
        padding: 0,
        resizeMode: "contain",
        height: height * 0.4,
        width: width * 0.8,
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
