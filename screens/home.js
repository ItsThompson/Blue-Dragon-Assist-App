import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Button,
    Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { lang } from "../chosenlanguage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function App() {
    const navigation = useNavigation();

    const Information = () => {
        if (lang !== null) {
            navigation.navigate("Main");
        } else {
            navigation.navigate("Languages");
        }
    };

    return (
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
                    title="Information"
                    onPress={() => Information()}
                ></Button>
            </View>
            <View style={styles.button}>
                <Button
                    title="Contact"
                    onPress={() => navigation.navigate("Contact")}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Switch Languages"
                    onPress={() => navigation.navigate("Languages")}
                ></Button>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
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
