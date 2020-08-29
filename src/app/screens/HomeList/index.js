import React, { useContext } from 'react';
import { FlatList, View, SafeAreaView, ActivityIndicator } from 'react-native';
import ThemeContext from '@context/themeContext';
import BooksContext from '@context/booksContext';

import BookItem from '@components/BookItem';
import styles from './styles';

function HomeList(){
    const {isLightTheme} = useContext(ThemeContext);
    const {books} = useContext(BooksContext);
    const keyExtractor = ({_id}) => `Libro: ${_id}`;

    const itemSeparator = () => <View style={[styles.separator, isLightTheme && styles.separatorWhite]}/>;

    const renderItem = ({item}) => {
        const {title, author, description, image_url} = item;
        return(
            <BookItem
                title={title}
                author={author}
                description={description}
                image={image_url}
            />
        );
    };

    return(
        <SafeAreaView style={[styles.container, isLightTheme && styles.darkContainer]}>
            {books.length === 0 ? (
                <ActivityIndicator color="white" size="large"/>
            ) : (<FlatList
                bounces={false}
                data={books}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={itemSeparator}
                contentContainerStyle={[styles.contentContainer, isLightTheme && styles.darkContainer]}
            />)}
        </SafeAreaView>
    );
}

export default HomeList;