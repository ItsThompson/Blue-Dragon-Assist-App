import React, { useEffect, useState } from "react";
import { Text, FlatList, ActivityIndicator, View } from "react-native";
import {decode, encode} from 'base-64';

const textsByLanguageAndTitle = require("../services/textsByLanguagesAndTitle")

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

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