import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Alert} from "react-native"
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUP from "../Cadastro";





export default function Capa(){
    const navigation = useNavigation();


  return(
    <View style={styles.container}>
      <View style={styles.ContImage}>
      <Image source={require('../Images/Capa.png')}/>
      </View>

      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('SignUp')}
      >
        
      <Text style={{fontSize: 20}}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Introduction')}
      >

        <Text style={{fontSize: 20}}>Introduction</Text>
      </TouchableOpacity>
    </View>
  )

  
}



const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#1D1638"
    },
    ContImage:{
      paddingTop: 150,
      paddingStart: 60
    },
    button:{
    alignItems: 'center',
    backgroundColor: '#8533EE',
    padding: 20,
    marginTop: '20%',
    marginStart: '10%',
    marginEnd: '10%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    }

  })