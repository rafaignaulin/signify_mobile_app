import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import text_size from "../../../assets/text_size";

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.black,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: text_size.h1,
        color: colors.green,
        marginBottom: '40%'
    },
    p: {
        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h3,
        color: colors.white,
        textAlign: 'center',
        marginBottom: '10%'
    },
    a: {
        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h5,
        color: colors.gray,
        textDecorationLine: 'underline',
        marginBottom: 15
    },
    input: {
        width: '66%',
        margin: 10,
        padding: 10,
        borderRadius: 25,
        borderColor: colors.white,
        backgroundColor: colors.gray700,


        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h4,
        color: colors.white,
        textAlign: 'center',
        
    },
    button: {
        width: '66%',
        backgroundColor: colors.green,
        height: 40,
        borderRadius: 5,
        borderColor: colors.black,

        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    }
})


export default styles;