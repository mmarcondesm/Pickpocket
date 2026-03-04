import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export default function Introduction4() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.Image}>
                <Image source={require('../Images/Capa 1.png')}/>
            </View>

            <View style={styles.LayoutText}>
                <Text style={styles.Title}>Introduction 4</Text>
                <Text style={styles.Text}>Text that explain how the app works</Text>
            </View>

            <View style={styles.fixToText}>
               
                <TouchableOpacity
                    style={styles.buttonskip}
                    onPress={() => navigation.navigate('Capa')}>
                    <Text style={styles.butext}>Get Started</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ecdfff'
    },
    Image:{
        paddingTop: '30%',
        alignItems: 'center',
    },
    LayoutText:{
        alignItems: 'center'
    },
    Title:{
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: '15%'
    },
    Text:{
        marginTop: '5%',
        fontSize: 18,
        marginStart: '5%',
        marginEnd: '5%'
    },
    buttonskip:{
        backgroundColor: '#8533EE',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 20,
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '70%'
    },
    butext:{
        fontSize: 15,
        fontWeight: 'bold'
    }
})