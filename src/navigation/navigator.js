import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import theme from '../styles/theme.json';

import ContactList from '../screens/contact-list';
import ContactForm from '../screens/contact-form';

const Stack = createStackNavigator();

const navigator = (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='ListaDeContatos'
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.light},
        headerTintColor: theme.colors.dark
      }}
    >
      <Stack.Screen
        name='ListaDeContatos'
        component={ContactList}
        options={{
          headerTitle: 'Lista de Contatos',
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name='NovoContato'
        component={ContactForm}
        options={{
          headerTitle: 'Novo Contato',
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default navigator;