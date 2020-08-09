import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bookContainer: {
        flexDirection: "row",
        backgroundColor: "#bbb",
        width: 350,
        borderRadius: 10,
    },
    bookContainerClicked: {
        flexDirection: "row",
        backgroundColor: "#012e6f",
        width: 350,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        color: "#000",
        fontWeight: 'bold',
    },
    titleClicked: {
        fontSize: 16,
        marginTop: 10,
        color: "#fff",
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitleClicked: {
        color: '#FFF',
    },
    bookDesc: {
        flex: 0.8,
        width: "100%",
        minHeight: 140,
    },
    body: {
        color: '#000',
    },
    bodyClicked: {
        color: '#FFF',
    },
    imgBook: {
        width: "20%",
        height: "85%",
        margin: 10
    },
});

export default styles;