import React, { useState } from "react";
import { StyleSheet, Dimensions, Text} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
    test = [
        "test1",
        "t1"
    ]
    return(
        <FlatList
            data = {test}
            style={styles.text}
            renderItem = {({item, index}) => (
            <Text>{item}</Text>
            )}
        />
    )
}
const styles = StyleSheet.create({
    image: {
        padding: 0,
        resizeMode: "contain",
        height: height * 0.4,
        width: width * 0.8,
    },
    text: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
    }
})