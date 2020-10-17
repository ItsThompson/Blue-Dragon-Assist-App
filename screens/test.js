<<<<<<< Updated upstream
import { View, Text} from "react-native";

// https://reactnative.dev/docs/network
export default class Test extends React.Component {
    render(){
        return(
            <View>
                <Text>
                    yo
                </Text>
            </View>
        )
=======
import React, { useState } from "react";
import * as firebase from 'firebase';
import { StyleSheet, View, Image, Dimensions} from "react-native";



const firebaseConfig = {
    apiKey: "AIzaSyANsBgqpzsRfwNXtmyvngaguAjgxkOz_ZY",
    authDomain: "blue-dragon-app.firebaseapp.com",
    databaseURL: "https://blue-dragon-app.firebaseio.com",
    projectId: "blue-dragon-app",
    storageBucket: "blue-dragon-app.appspot.com",
    messagingSenderId: "322576600070",
    appId: "1:322576600070:web:92473c995dbe29821b4787",
    measurementId: "G-CNBJSYCXEM"
}

firebase.initializeApp(firebaseConfig);


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
    const [state, setState] = useState([]);
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child('vard 0.000 seconds.png');

    imageRef
        .getDownloadURL()
        .then((url) => {
            this.setState({image: url});
        })
        .catch((e) =>{
            console.log('Error downloading image =>', e)
        })
    
    return(
        <View>
            <Image source={this.state.image} style={styles.image}/>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        padding: 0,
        resizeMode: "contain",
        height: height * 0.4,
        width: width * 0.8,
>>>>>>> Stashed changes
    }
})