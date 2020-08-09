import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import styles from './styles';

function BookItem({title, author, description, image}){

    const [bgColor, setBgColor] = useState(styles.bookContainer);
    const [titleColor, setTitleColor] = useState(styles.title);
    const [bodyColor, setBodyColor] = useState(styles.body);
    const [authorColor, setAuthorColor] = useState(styles.subtitle);

    const handlePress = () => {
        if(bgColor == styles.bookContainer){
            setBgColor(styles.bookContainerClicked);
            setTitleColor(styles.titleClicked);
            setBodyColor(styles.bodyClicked);
            setAuthorColor(styles.subtitleClicked);
        } else {
            setBgColor(styles.bookContainer);
            setTitleColor(styles.title);
            setBodyColor(styles.body);
            setAuthorColor(styles.subtitle);
        }
    }

    return(
        <TouchableOpacity onPress={() => {handlePress()}}>
            <View  style={bgColor}>
                <Image style={styles.imgBook} resizeMode="contain" source={{uri: image}}/>
                <View style={styles.bookDesc}>
                    <Text style={titleColor}>{title}</Text>
                    <Text style={authorColor}>{author}</Text>
                    <Text style={bodyColor} numberOfLines={3} ellipsizeMode="tail">{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BookItem;