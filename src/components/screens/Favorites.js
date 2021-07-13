import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FAVORITES() {
    return (
        <View style={styles.container}>
            <Text>Estamos en la FAVORITES</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})