import * as React from "react";
import { ScrollView, Text, StyleSheet, Linking } from "react-native";
import { Card, Divider } from "react-native-elements";

<<<<<<< Updated upstream
export default class Contact extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Contact Us</Text>
                <Divider
                    style={{ height: 2, backgroundColor: "#61BB9B" }}
                ></Divider>
                {/* Sourced from https://www.bluedragon.org/who-we-are__trashed/contact-us/ */}
                <Card>
                    <Card.Title style={styles.label}>Our Website</Card.Title>
                    <Text style={styles.text}>
                        <Text
                            style={{ color: "blue" }}
                            onPress={() =>
                                Linking.openURL("https://www.bluedragon.org/")
                            }
                        >
                            https://www.bluedragon.org/
                        </Text>
=======
export default function App() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Contact Us</Text>
            <Divider
                style={{ height: 2, backgroundColor: "#61BB9B" }}
            ></Divider>
            {/* Sourced from https://www.bluedragon.org/who-we-are__trashed/contact-us/ */}
            <Card>
                <Card.Title style={styles.label}>Our Website</Card.Title>
                <Text style={styles.text}>
                    <Text
                        style={{ color: "blue" }}
                        onPress={() =>
                            Linking.openURL("https://www.bluedragon.org/")
                        }
                    >
                        https://www.bluedragon.org/
>>>>>>> Stashed changes
                    </Text>
                </Card>
                <Card>
                    <Card.Title style={styles.label}>Our Email</Card.Title>
                    <Text style={styles.text}>
                        <Text
                            style={{ color: "blue" }}
                            onPress={() =>
                                Linking.openURL("mailto:info@bdcf.org")
                            }
                        >
                            info@bdcf.org
                        </Text>
                    </Text>
<<<<<<< Updated upstream
                </Card>
                <Card>
                    <Card.Title style={styles.label}>
                        Head Office Number
                    </Card.Title>
                    <Text style={styles.text}>
                        <Text>+84 24 3717 0544</Text>
                    </Text>
                </Card>
            </ScrollView>
        );
    }
=======
                </Text>
            </Card>
            <Card>
                <Card.Title style={styles.label}>
                    Head Office Number
                </Card.Title>
                <Text style={styles.text}>
                    <Text>+84 24 3717 0544</Text>
                </Text>
            </Card>
        </ScrollView>
    );
>>>>>>> Stashed changes
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#EAE7DC",
    },
    title: {
        height: 100,
        paddingTop: 30,
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        color: "#E85A4F",
    },
    label: {
        fontSize: 20,
        color: "#E98074",
    },
    text: {
        fontSize: 15,
        paddingLeft: 5,
    },
});
