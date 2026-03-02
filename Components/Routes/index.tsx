import * as React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Capa from '../Capa';
import SignUP from '../Cadastro';
import Introduction from '../Introduction';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Capa">
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
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }}
          />
    </Stack.Navigator>
  );
}
