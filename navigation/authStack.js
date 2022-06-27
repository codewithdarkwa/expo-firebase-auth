import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name="Sign Up" component={SignUp} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}