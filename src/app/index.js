/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home/index';
import HomeList from '@screens/HomeList';
import ItemDetail from '@screens/ItemDetail';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: '#000'},headerTintColor: '#FFF',}}>
          <AppStack.Screen name="Home" component={Home} options={{title: 'Inicio'}}/>
          <AppStack.Screen name="HomeList" component={HomeList} options={{title: 'Lista de Libros'}}/>
          <AppStack.Screen name="ItemDetail" component={ItemDetail} options={{title: 'Detalles'}} initialParams={{title: 'No title'}}/>
        </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
