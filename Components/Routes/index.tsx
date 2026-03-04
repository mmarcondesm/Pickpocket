import * as React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUP from '../Cadastro';
import Introduction from '../Introduction';
import Introduction2 from '../Introduction/index2';
import Introduction3 from '../Introduction/index3';
import Introduction4 from '../Introduction/index4';
import Capa from '../Capa';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Capa">
      <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }}
          />
      <Stack.Screen 
          name="Capa" 
          component={Capa}
          options={{ headerShown: false }}
          />
      <Stack.Screen 
          name="SignUp" 
          component={SignUP}
          options={{ headerShown: false }}
          />
      <Stack.Screen
          name="Introduction2"
          component={Introduction2}
          options={{ headerShown: false }}
          />
      <Stack.Screen
          name="Introduction3"
          component={Introduction3}
          options={{ headerShown: false }}
          />
      <Stack.Screen
          name="Introduction4"
          component={Introduction4}
          options={{ headerShown: false }}
          />
    </Stack.Navigator>
  );
}
