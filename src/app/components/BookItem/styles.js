import { StyleSheet } from 'react-native';
import { black, white, softGrey } from '@constants/colors';

const styles = StyleSheet.create({
    bookContainer: {
        flexDirection: "row",
        backgroundColor: softGrey,
        width: 350,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        color: black,
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 10,
        fontWeight: 'bold',
        color: black,
    },
    bookDesc: {
        flex: 0.8,
        width: "100%",
        minHeight: 140,
    },
    body: {
        color: black,
    },
    imgBook: {
        width: "20%",
        height: "85%",
        margin: 10
    },
});

export default styles;