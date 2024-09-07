import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

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
            marginTop:10
          }}>AI Travel Planner</Text>
          <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            textAlign:'center',
            color:Colors.GRAY,
            marginTop:20
          }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero blanditiis minus sequi id maxime illum possimus, harum obcaecati, quasi quisquam molestias quos itaque, a accusantium.</Text>
          
          <View style={styles.button}>
            <Text style={{color:Colors.WHITE,
              fontFamily:'outfit',
              fontSize:17,
              textAlign:'center'}}>Sign in With Google
            </Text>
          </View>
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
    padding:25,
  },
  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'20%'
  }
})