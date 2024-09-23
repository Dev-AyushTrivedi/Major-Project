import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function SearchPlaces() {

    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search Places',

        })
    })
  return (
    <View 
    style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <Text>SearchPlaces</Text>
    </View>
  )
}