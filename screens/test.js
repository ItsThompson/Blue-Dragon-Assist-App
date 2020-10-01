import React from "react";
import axios from "axios";
import { View, Text} from "react-native";

// https://reactnative.dev/docs/network
export default class Test extends React.Component {
    
    state={
        data:[]
    }

    componentDidMount(){
        axios.get(`http://blue-dragon-app-database.herokuapp.com/homepage/english`)
        .then(res => {
            const data = res.data;
            this.setState({ data });
        })
        .catch(function(error){
            console.error(error)
        });
    }

    render(){
        return(
            <View>
                {this.state.data.map(i => 
                <Text key = {i.id}>
                    {i.title}
                </Text>
                )}
                {this.state.data.map(i => 
                <Text key = {i.id}>
                    {i.body}
                </Text>
                )}
            </View>
        )
    }
};
