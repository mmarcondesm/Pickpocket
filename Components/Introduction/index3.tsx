import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export default function Introduction3() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.Image}>
                <Image source={require('../Images/Capa 1.png')}/>
            </View>

            <View style={styles.LayoutText}>
                <Text style={styles.Title}>Introduction 2</Text>
                <Text style={styles.Text}>Text keep explain how the app works</Text>
            </View>

            <View style={styles.fixToText}>
               <TouchableOpacity
                style={styles.buttonskip}
                onPress={() => navigation.navigate('Introduction')}>
                <Text style={styles.butext}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonext}
                onPress={() => navigation.navigate('Introduction4')}>
                <Text style={styles.butext}>Next</Text>
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
    buttonext:{
        backgroundColor: '#8533EE',
        marginEnd: '5%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 20

    },
    buttonskip:{
        backgroundColor: '#8533EE',
        marginStart: '5%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 20,
        
        
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '70%'
    },
    butext:{
        fontSize: 15,
        fontWeight: 'bold'
    }
})