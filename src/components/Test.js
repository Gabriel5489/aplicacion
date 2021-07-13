import React from 'react'
import { View, Text } from 'react-native';
import {Button} from 'react-native-paper';

export default function Test() {
    return (
        <View>
            <Text>Estamos en TEST COMPONENTS</Text>
            <Button onPress={() => console.log("Hola")} mode="contained">
               ClickMe 
            </Button>
        </View>
    )
}
