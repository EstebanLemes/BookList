import { StyleSheet, BackHandler } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentConteiner: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
    },
    separator: {
        height: 2,
        margin: 10,
        backgroundColor: '#000'
    },
    button: {
        backgroundColor: '#bbb',
        width: '85%',
        height: 50,
        marginVertical: 20,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F00',
    },
    buttonTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default styles;