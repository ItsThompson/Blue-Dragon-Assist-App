import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import UnorderedList from "react-native-unordered-list";
import { Card, Divider } from "react-native-elements";

export default class Information extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Key Statistics</Text>
                <Divider
                    style={{ height: 2, backgroundColor: "#61BB9B" }}
                ></Divider>
                <Card>
                    <Card.Title style={styles.label}>
                        What is Human Trafficking
                    </Card.Title>
                    <Text style={styles.text}>
                        Trafficking in persons is the act of recruiting,
                        harboring, transporting, providing, or obtaining a
                        person for compelled labor or commercial sex acts
                        through the use of force, fraud or coercion.
                    </Text>
                    <Text style={styles.text}>
                        {"\n"}An estimated{" "}
                        <Text style={{ fontWeight: "bold" }}>
                            40.3 million men
                        </Text>
                        , women and children are trapped in situations which
                        they were coerced or deceived into and which they cannot
                        leave.
                    </Text>
                </Card>
                <Card>
                    <Card.Title style={styles.label}>
                        5 Most Common Trends of Human Trafficking in Vietnam{" "}
                    </Card.Title>
                    <UnorderedList>
                        <Text style={styles.text}>
                            Trafficked from Northern Vietnam into China for
                            forced marriage, sexual exploitation, or labor
                            exploitation.
                        </Text>
                    </UnorderedList>
                    <Text>{"\n"}</Text>
                    <UnorderedList>
                        <Text style={styles.text}>
                            Trafficked from Southern Vietnam to Cambodia,
                            Malaysia, Laos PDR, or Thailand for sexual
                            exploitation.
                        </Text>
                    </UnorderedList>
                    <Text>{"\n"}</Text>
                    <UnorderedList>
                        <Text style={styles.text}>
                            Lured into arranged marriages in Taiwan, South
                            Korea, Singapore, and Malaysia.
                        </Text>
                    </UnorderedList>
                    <Text>{"\n"}</Text>
                    <UnorderedList>
                        <Text style={styles.text}>
                            Trafficked to countries and regions outside of the
                            GMS including Macau, Hong Kong, Japan, and Europe
                            mainly for sexual exploitation.
                        </Text>
                    </UnorderedList>
                    <Text>{"\n"}</Text>
                    <UnorderedList>
                        <Text style={styles.text}>
                            Internal trafficking is prevalent in most provinces
                            in Vietnam for the purpose of labor exploitation and
                            sexual exploitation.
                        </Text>
                    </UnorderedList>
                </Card>
            </ScrollView>
        );
    }
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
