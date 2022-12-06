import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";


export default StyleSheet.create({
    button: {

        backgroundColor: colors.green,
        height: 40,
        width: 150,
        borderRadius: 5,
        borderColor: '#000',

        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: colors.black
    }

});