import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './Components/Routes';


export default function Main() {
    return(
    <NavigationContainer>
        <Routes/>
    </NavigationContainer>

    )
}