/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { defaultNavOptions } from '@constants/navigation';

import ThemeContext, { themes } from '@context/themeContext';
import Home from '@screens/Home/index';
import HomeList from '@screens/HomeList';
import ItemDetail from '@screens/ItemDetail';
import {black, white} from '@constants/colors';
import { StatusBar } from 'react-native';

const AppStack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const isLightTheme = theme === themes.light;  
  const barStyle = isLightTheme ? 'light-content' : 'dark-content';
  const barBg = isLightTheme ? black : white;
  const toggleTheme = () => setTheme(isLightTheme ? themes.dark : themes.light);
  return (
    <ThemeContext.Provider value={{theme, isLightTheme, toggleTheme}}>
      <StatusBar backgroundColor={barBg} barStyle={barStyle} />
      <NavigationContainer>
          <AppStack.Navigator 
            initialRouteName="Home" 
            screenOptions={defaultNavOptions(isLightTheme)}
          >
            <AppStack.Screen 
              name="Home" 
              component={Home} 
              options={{title: 'Inicio'
              }}
            />
            <AppStack.Screen 
              name="HomeList" 
              component={HomeList} 
              options={{title: 'Lista de Libros'}}
            />
            <AppStack.Screen 
              name="ItemDetail" 
              component={ItemDetail} 
              options={{title: 'Detalles'}} 
              initialParams={{title: 'No title'}}
            />
          </AppStack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
