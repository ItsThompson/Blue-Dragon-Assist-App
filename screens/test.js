import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

// https://reactnative.dev/docs/network
export default App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/ItsThompson/Blue-Dragon-App-Database/master/test.json"
        )
            .then((response) => response.json())
            .then((json) => setData(json.credits))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                // https://reactnative.dev/docs/flatlist.html
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <Text>
                            {item.name}, {item.role}
                        </Text>
                    )}
                />
            )}
        </View>
    );
};
