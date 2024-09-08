import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Colors } from './../../../constants/Colors';

export default function SignIn() {
  const navigation=useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      HeaderShown:false
    })
  },[])
  return (
    <View style={{
      padding:25,
      paddingTop:80,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>Let's Sign you In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20
      }}>Welcome back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20
      }}>You've been missed</Text>

      <View>
        <Text>
          {/* at 44.41 */}
        </Text>
      </View>
    </View>
  )
}