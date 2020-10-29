import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Information from "./screens/information";
import Languages from "./screens/langauges";
import Contact from "./screens/contact";
import HumanTrafficking from "./screens/humantrafficking";
import StayingSafe from "./screens/stayingsafe";
import FindingHelp from "./screens/findinghelp";
import Main from "./screens/main";
import Test from "./screens/test";
import Vietnamese from "./screens/vietnamese";

const Stack = createStackNavigator();

export default function App() {
    createHomeStack = () => (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='Test' component={Test} />
            <Stack.Screen name='Information' component={Information} />
            <Stack.Screen name='Contact' component={Contact} />
            <Stack.Screen name='Languages' component={Languages} />
            <Stack.Screen name='Vietnamese' component={Vietnamese} />
            <Stack.Screen
                name='HumanTrafficking'
                component={HumanTrafficking}
            />
            <Stack.Screen name='StayingSafe' component={StayingSafe} />
            <Stack.Screen name='FindingHelp' component={FindingHelp} />
        </Stack.Navigator>
    );
    return <NavigationContainer>{this.createHomeStack()}</NavigationContainer>;
}