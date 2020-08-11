import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

function ItemDetail({route}){
    const {title, author, description, image} = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.img}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.authorContainer}>
                <Text style={styles.author}>Autor: {author}</Text>
            </View>
            <ScrollView style={styles.descriptionContainer}>
                <Text   Text style={styles.description}>{description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemDetail;