import * as React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import Routes from './Components/Routes';



export default function Main() {
    return(
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    )
}