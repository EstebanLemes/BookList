import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    bookView: {
        width: 350,
        height: 100,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 30,
    },
    imageBook: {
        width: '100%',
        height: 100,
    },
});

export default styles;