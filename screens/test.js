import React, { useEffect, useState } from "react";
import { WebView } from 'react-native-webview';
// import { lang } from "../chosenlanguage";
// import { Text, FlatList, ActivityIndicator, View, Button } from "react-native";
import { decode, encode } from "base-64";
// import { Audio } from "expo-av";

const textsByLanguageAndTitle = require("../services/textsByLanguagesAndTitle");

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

export default function App() {
    return (
        <WebView
            source={{ uri: "https://www.youtube.com/embed/ZMByI4s-D-Y" }}
            style={{ marginBottom: 500 }}
        />
    );
}

// const [isLoading, setLoading] = useState(true);
// const [data, setData] = useState([]);
// const [sound, setSound] = React.useState();

// async function playSound() {
//     console.log("Loading Sound");
//     const { sound } = await Audio.Sound.createAsync(
//         require("../test.mp3")
//     );
//     // try {
//     //     const { sound } = await Audio.Sound.loadAsync({
//     //         uri:
//     //             "",
//     //     });
//     // } catch (e) {
//     //     console.log("Error");
//     //     console.log(e)
//     // }

//     setSound(sound);

//     console.log("Playing Sound");
//     await sound.playAsync();
// }

// useEffect(() => {
//     textsByLanguageAndTitle(lang, "test")
//         .then((output) => {
//             console.log("test.js");
//             console.log(output);
//             let out = output;
//             setData(out);
//         })
//         .catch((error) => {
//             console.error(error);
//         })
//         .finally(() => {
//             setLoading(false);
//         });
// }, []);

// useEffect(() => {
//     return sound
//         ? () => {
//               console.log("Unloading Sound");
//               sound.unloadAsync();
//           }
//         : undefined;
// }, [sound]);

// return (
//     <View style={{ flex: 1, padding: 24 }}>
//         {isLoading ? (
//             <ActivityIndicator />
//         ) : (
//             <View>
//                 <Button
//                     style={{ padding: 64 }}
//                     title="Play Sound"
//                     onPress={playSound}
//                 />
//                 <FlatList
//                     data={data}
//                     renderItem={({ item }) => <Text>{item.data}</Text>}
//                     keyExtractor={(item) => item.id}
//                 />
//             </View>
//         )}
//     </View>
// );
