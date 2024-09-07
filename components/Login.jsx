import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  const router=useRouter();
  return (
    <View>
        <Image source={require('./../assets/images/Login.jpg')}
          style={{
            width: '100%',
            height:520
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
          

          <TouchableOpacity style={styles.button}
          onPress={()=>router.push('auth/sign-in')}
          >
            <Text style={{color:Colors.WHITE,
              fontFamily:'outfit',
              fontSize:17,
              textAlign:'center'}}>Get Started
            </Text>
          </TouchableOpacity>
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