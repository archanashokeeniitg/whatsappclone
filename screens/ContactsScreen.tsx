import * as React from 'react';
import { Text, View } from '../components/Themed';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import Users from "../data/Users"
import ContactsListItem from '../components/ContactsListItem';

 

export default function ContactsScreen() {
    
  return (
    <View style={styles.container}>
        <Text>
            Contacsssss
        </Text>

      <FlatList
      style = {{width :"100%" }}
        data={Users}
       renderItem={({item}) => <ContactsListItem  contacts = {item} />}
        keyExtractor={(item) => item.id}
      />

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
