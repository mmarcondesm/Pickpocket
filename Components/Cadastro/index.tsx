import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function SignUP() {

    const navigation = useNavigation();


    return(
        <View style={styles.Container}>
            <Image source={require('../Images/Capa.png')} />
        </View>
    )
}


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: "#1D1638"
    }
})