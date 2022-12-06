import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import text_size from "../../../assets/text_size";

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.black,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: text_size.h1,
        color: colors.green
    },
    p: {
        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h3,
        color: colors.white,
        textAlign: 'center',
        margin: '10%'
    },

})


export default styles;