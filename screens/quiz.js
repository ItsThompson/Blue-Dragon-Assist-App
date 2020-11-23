import React from "react";
import { 
    StyleSheet,
    View
 } from "react-native";
import Questions from "../components/questions"

export default function App() {
    // Need to work on questions ui
    return(
        <Questions/>
    )
}
const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
    }
});
