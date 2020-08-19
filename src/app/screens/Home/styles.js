import { StyleSheet } from 'react-native';
import {black} from '@constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    containerDark: {
        backgroundColor: black
    },
    bookView: {
        width: 350,
        height: 100,
    },
    imageBook: {
        width: '100%',
        height: 100,
    },
});

export default styles;