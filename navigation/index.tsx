import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName , View , Text} from 'react-native';
import Colors  from "../constants/Colors";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true , headerStyle : { backgroundColor : Colors.light.tint}, headerTintColor : Colors.light.background , headerTitleAlign : 'left' }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ title: 'WhatsApp' , headerRight: () => <View style={{flexDirection : 'row' , width : 60, justifyContent : 'space-between' , marginRight : 20}}><AntDesign name="search1" size={24} color="white" /><Entypo name="dots-three-vertical" size={24} color="white" /></View>}}  />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
