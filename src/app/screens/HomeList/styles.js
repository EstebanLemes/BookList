import { StyleSheet, BackHandler } from 'react-native';
import { white, black, red, softGrey } from '@constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    contentConteiner: {
        backgroundColor: white,
        flex: 1,
        alignItems: 'center',
    },
    separator: {
        height: 2,
        margin: 10,
        backgroundColor: black
    },
    buttonTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default styles;