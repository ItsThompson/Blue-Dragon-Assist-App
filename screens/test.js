import React, { useState } from "react";
import { StyleSheet, View, Image, Dimensions} from "react-native";

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
    }
})