import React from "react";
import { StyleSheet, Dimensions, Text} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {decode, encode} from 'base-64'

const textsByLanguageAndTitle = require("../services/textsByLanguagesAndTitle")

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function Info(){
    return new Promise((resolve) => {
        textsByLanguageAndTitle("english", "test").then((data) => {
            console.log(data);
            let test = data[0];
            resolve(test);
            return;
        })
    })
}

export default function App() {
    const test = Info();
    return(
        <Text>{test}</Text>
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