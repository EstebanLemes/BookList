/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { defaultNavOptions } from '@constants/navigation';

import ThemeContext, { themes } from '@context/themeContext';
import BooksContext from '@context/booksContext';
import Home from '@screens/Home/index';
import HomeList from '@screens/HomeList';
import ItemDetail from '@screens/ItemDetail';
import {black, white} from '@constants/colors';
import { StatusBar } from 'react-native';
import { getBookList } from '@services/bookService';

const AppStack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const isLightTheme = theme === themes.light;  
  const barStyle = isLightTheme ? 'light-content' : 'dark-content';
  const barBg = isLightTheme ? black : white;
  const toggleTheme = () => setTheme(isLightTheme ? themes.dark : themes.light);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => setBooks(await getBookList());
    getBooks();
  }, []);

  return (
    <BooksContext.Provider value={{books}}>
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
    </BooksContext.Provider>
  );
};

export default App;
