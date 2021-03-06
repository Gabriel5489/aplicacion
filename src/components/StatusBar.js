import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

export default function StatusBarCuston(props) {
    const{backgroundColor, ...rest}=props;

    return (
        <>
        <StatusBar backgroundColor={backgroundColor}{...rest}/>
        <SafeAreaView
            style={{
                flex:0,
                backgroundColor:backgroundColor,
            }}
        />

         
        </>
         
    );
}
