<<<<<<< Updated upstream
import React from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Information from './screens/information';
import Languages from './screens/langauges';
import Contact from './screens/contact';
import HumanTrafficking from './screens/humantrafficking';
import StayingSafe from './screens/stayingsafe';
import FindingHelp from './screens/findinghelp';
import Main from './screens/main';
import Test from './screens/test';
import Vietnamese from './screens/vietnamese';
=======
import React from "react";
import * as firebase from 'firebase';
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
>>>>>>> Stashed changes

const Stack = createStackNavigator();

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