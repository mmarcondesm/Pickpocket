import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function SignUP() {

    const navigation = useNavigation();


    return(
        <View style={styles.Container}>
            <View style={styles.ContImage}>
                  <Image source={require('../Images/Capa.png')}/>
            </View>
            

            <View style={styles.form}>
                <Text style={styles.Title}>Crie sua conta</Text>

                <Text style={styles.Text}>Nome</Text>
                <TextInput style={styles.input}>
                    Digite seu nome
                </TextInput>
                <Text style={styles.Text}>
                    Email
                </Text>
                <TextInput style={styles.input}>
                    Digite seu email
                </TextInput>
                <Text style={styles.Text}>
                    Senha
                </Text>
                <TextInput style={styles.input}>
                   No mínimo 8 caracteres
                </TextInput>
                <Text style={styles.Text}>
                    Confirme sua senha
                </Text>
                <TextInput style={styles.input}>
                    Confirmar sua senha
                </TextInput>
            </View>
            <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Capa')}>
                <Text>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Capa')}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: "#ffff"

    },
    form:{
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
        backgroundColor: "#ffff",
        marginTop: 10
    },
    Title:{
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    Text:{
        marginTop: '2%',
        marginStart: '10%',
        marginEnd: '10%',
        fontWeight: 'bold'
        
    },
    ContImage:{
      paddingTop: 40,
      paddingStart: 60
    },
    button:{
    alignItems: 'center',
    backgroundColor: '#8533EE',
    padding: 20,
    marginTop: '8%',
    marginStart: '10%',
    marginEnd: '10%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginStart: '10%',
    marginEnd: '10%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },
})