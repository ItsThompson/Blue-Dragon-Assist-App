import React from "react";
import { 
    StyleSheet,
    View
 } from "react-native";
import Questions from "../components/questions"

export default function App() {
    return(
        <Questions/>
    )
}
const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
    }
});
