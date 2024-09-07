import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Login() {
  return (
    <View>
        <Image source={require('./../assets/images/Login.jpg')}
          style={{
            width: '100%',
            height:450
          }}
        />
        <View style={styles.container}>
          <Text style={{
            fontSize:28,
            fontFamily: 'outfit-bold',
            textAlign:'center',
          }}>AI Travel Planner</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    height:'100%',
    padding:15,
  }
})