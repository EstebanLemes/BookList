import React, {useContext} from 'react';
import { SafeAreaView, Text, Image, View, ScrollView } from 'react-native';
import ThemeContext from '@context/themeContext';

import styles from './styles';

function ItemDetail({route}){
    const {title, author, description, image} = route.params;
    const {isLightTheme} = useContext(ThemeContext);
    return(
        <SafeAreaView style={[styles.container, isLightTheme && styles.containerDark]}>
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.img}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={[styles.authorContainer, isLightTheme && styles.authorContainerDark]}>
                <Text style={styles.author}>Autor: {author}</Text>
            </View>
            <ScrollView style={styles.descriptionContainer}>
                <Text   Text style={[styles.description, isLightTheme && styles.descriptionDark]}>{description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemDetail;