/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import { SafeAreaView, Image, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import image from '@assets/image/books.png';
import ThemeContext from '@context/themeContext';

function Home({navigation}){
    const {isLightTheme} = useContext(ThemeContext);
    const handleHome = () => navigation.navigate('HomeList');

    return(
        <SafeAreaView style={[styles.container, isLightTheme && styles.containerDark]}>
            <TouchableOpacity onPress={handleHome}>
                <View style={styles.bookView}>
                    <Image style={styles.imageBook} resizeMode="contain" source={image} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;