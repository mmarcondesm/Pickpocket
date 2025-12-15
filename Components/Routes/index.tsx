import * as React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Capa from '../Capa';
import SignUP from '../Cadastro';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Capa">
      <Stack.Screen 
          name="Capa" 
          component={Capa}
          />
      <Stack.Screen 
          name="SignUp" 
          component={SignUP}
          />
    </Stack.Navigator>
  );
}
