import {
    ScrollView,
    Text,
    StyleSheet,
    Linking,
    FlatList,
    ActivityIndicator,
    View,
} from "react-native";
import { Card, Divider } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { decode, encode } from "base-64";
import { lang } from "../chosenlanguage";

const textsByLanguageAndTitle = require("../services/textsByLanguagesAndTitle");
if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

export default function App() {
    const [isLoading, setLoading] = useState(true);
    let chosenLanguage = lang;
    const [title, setTitle] = useState("undefined");
    const [website_h1, setWebsiteH1] = useState("undefined");
    const [website, setWebsite] = useState("undefined");
    const [email_h1, setEmailH1] = useState("undefined");
    const [email, setEmail] = useState("undefined");
    const [number_h1, setNumberH1] = useState("undefined");
    const [number, setNumber] = useState("undefined");
    useEffect(() => {
        textsByLanguageAndTitle(chosenLanguage, "contact_title")
            .then((output) => {
                // console.log(output);
                let _title = String(output[0]["data"]);
                setTitle(_title);
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
        textsByLanguageAndTitle(chosenLanguage, "contact_website_h1")
            .then((output) => {
                // console.log(output);
                let _website_h1 = String(output[0]["data"]);
                setWebsiteH1(_website_h1);
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
        textsByLanguageAndTitle(chosenLanguage, "contact_website")
            .then((output) => {
                // console.log(output);
                let _website = String(output[0]["data"]);
                setWebsite(_website);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // setLoading(false);
                console.log("Website");
            });
    }, []);
    useEffect(() => {
        textsByLanguageAndTitle(chosenLanguage, "contact_email_h1")
            .then((output) => {
                // console.log(output);
                let _email_h1 = String(output[0]["data"]);
                setEmailH1(_email_h1);
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
        textsByLanguageAndTitle(chosenLanguage, "contact_email")
            .then((output) => {
                let _email = String(output[0]["data"]);
                setEmail(_email);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Email");
            });
    }, []);
    useEffect(() => {
        textsByLanguageAndTitle(chosenLanguage, "contact_number_h1")
            .then((output) => {
                // console.log(output);
                let _number_h1 = String(output[0]["data"]);
                setNumberH1(_number_h1);
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
        textsByLanguageAndTitle(chosenLanguage, "contact_number")
            .then((output) => {
                let _number = String(output[0]["data"]);
                setNumber(_number);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Office Number");
                setLoading(false);
            });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Divider
                        style={{ height: 2, backgroundColor: "#61BB9B" }}
                    ></Divider>
                    {/* Sourced from https://www.bluedragon.org/who-we-are__trashed/contact-us/ */}
                    <Card>
                        <Card.Title style={styles.label}>
                            {website_h1}
                        </Card.Title>
                        <Text style={styles.text}>
                            <Text
                                style={{ color: "blue" }}
                                onPress={() =>
                                    Linking.openURL(
                                        // "https://www.bluedragon.org/"
                                        { website }
                                    )
                                }
                            >
                                {website}
                            </Text>
                        </Text>
                    </Card>
                    <Card>
                        <Card.Title style={styles.label}>{email_h1}</Card.Title>
                        <Text style={styles.text}>
                            <Text
                                style={{ color: "blue" }}
                                onPress={() =>
                                    Linking.openURL("mailto:" + { email })
                                }
                            >
                                {email}
                            </Text>
                        </Text>
                    </Card>
                    <Card>
                        <Card.Title style={styles.label}>
                            {number_h1}
                        </Card.Title>
                        <Text style={styles.text}>
                            <Text>{number}</Text>
                        </Text>
                    </Card>
                </ScrollView>
                // <FlatList
                //     data={data}
                //     renderItem={({ item }) => (
                //         <Text>{item.data}</Text>
                //     )}
                //     keyExtractor = {item => item.id}
                // />
            )}
        </View>
    );
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
