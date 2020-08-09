/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Image} from 'react-native';

import BookItem from '@components/BookItem';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import image from '@assets/image/books.png';

const rpo = 'https://images-na.ssl-images-amazon.com/images/I/71BjAljTQeL.jpg';
const author = 'Ready Player One';
const title = 'Ernest Cline';
const description = 'Es una novela de ciencia ficción escrita por el autor estadounidense Ernes Cline y cuya edición original en inglés fue publicada el 16 de agosto de 2011 por la editorial Crown Publishers';

function Home({navigation}){

    const handleHome = () => navigation.navigate('HomeList');

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleHome}>
                <View style={styles.bookView}>
                    <Image style={styles.imageBook} resizeMode="contain" source={image} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;