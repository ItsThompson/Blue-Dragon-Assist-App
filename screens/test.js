// import React, { useEffect, useState } from "react";
// import { ActivityIndicator, FlatList, Text, View } from "react-native";

// // https://reactnative.dev/docs/network
// export default App = () => {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch(
//             "https://jsonkeeper.com/b/B5UY"
//         )
//             .then((response) => response.json())
//             .then((json) => setData(json.credits))
//             .catch((error) => console.error(error))
//             .finally(() => setLoading(false));
//     }, []);

//     console.log(data)

//     return (
//         <View style={{ flex: 1, padding: 24 }}>
//             {isLoading ? (
//                 <ActivityIndicator />
//             ) : (
//                 // https://reactnative.dev/docs/flatlist.html
//                 <FlatList
//                     data={data}
//                     keyExtractor={({ id }) => id}
//                     renderItem={({ item }) => (
//                         <Text>
//                             {item.name}, {item.role}
//                         </Text>
//                     )}
//                 />
//             )}
//         </View>
//     );
// };

import React, { useEffect, useState } from "react";
import { Text, FlatList, ActivityIndicator, View } from "react-native";
import {decode, encode} from 'base-64';

const textsByLanguageAndTitle = require("../services/textsByLanguagesAndTitle")

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        textsByLanguageAndTitle("english", "test")
            .then((output) => {
                console.log('test.js');
                console.log(output);
                let out = output;
                setData(out);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    return(
        <View style={{ flex: 1, padding: 24 }}>
            {
                isLoading ? (
                    <ActivityIndicator/>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <Text>{item.data}</Text>
                        )}
                        keyExtractor = {item => item.id}
                    />
                )
            }
        </View>
    )
}
// // Old Code just incase i need it
//     // // const test = Info();
//     // // let data = data[0];
//     // // console.log(typeof foo);
//     // // Proof of concept
//     // const Test = () => {
//     //     return <Text>test</Text>
//     // };
//     // // Error: Objects are not valid as React child (found: object with keys {}).
//     // // If you meant to render a collection of children, use an array instead.

//     // return(
//     //     <Test/>
//    // )