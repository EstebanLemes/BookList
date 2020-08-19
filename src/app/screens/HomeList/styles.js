import { StyleSheet } from 'react-native';
import { white, black } from '@constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    darkContainer: {
        backgroundColor: black,
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
    separatorWhite: {
        backgroundColor: white
    },
});

export default styles;