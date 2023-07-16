import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash/Splash";
import Signup from "../screens/Signup/Signup";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" options={{ headerShown: false }}>
          {(props) => <Splash {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp" options={{ headerShown: false }}>
          {(props) => <Signup {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
