import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName , View , Text} from 'react-native';
import Colors  from "../constants/Colors";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import ChatRoomScreen from "../screens/ChatRoomScreen"
//import BottomTabNavigator from './MainTabNavigator';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ContactsScreen from '../screens/ContactsScreen';

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
    <Stack.Navigator screenOptions={{ headerShown: true , headerStyle : { backgroundColor : Colors.light.tint, shadowOpacity : 0}, headerTintColor : Colors.light.background , headerTitleAlign : 'left' }}>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{ title: 'WhatsApp' , headerRight: () => <View style={{flexDirection : 'row' , width : 60, justifyContent : 'space-between' , marginRight : 20 , }}><AntDesign name="search1" size={24} color="white" /><Entypo name="dots-three-vertical" size={24} color="white" /></View>}}  />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={({ route }) => ({ title: route.params.user , headerRight:() =><View style={{flexDirection : 'row' , width : 60, justifyContent : 'space-between' , marginRight : 20 , }}><Ionicons name="ios-videocam" size={22} color="white" /><Ionicons name="ios-call" size={22} color="white" /></View> })}/>
      <Stack.Screen name="Contacts" component={ContactsScreen} options={({ route }) => ({ title: 'ContactScreen NNN' , headerRight:() =><View style={{flexDirection : 'row' , width : 60, justifyContent : 'space-between' , marginRight : 20 , }}><Ionicons name="ios-videocam" size={22} color="white" /><Ionicons name="ios-call" size={22} color="white" /></View> })}/>   
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
