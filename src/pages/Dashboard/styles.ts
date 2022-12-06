import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import text_size from "../../../assets/text_size";


const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.black,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    header : {
        backgroundColor: colors.green,
        top: 0,
        height: 64,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    headerText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h3,
        color: colors.white,
        textAlign: 'center'
    },

    input: {
        width: 360,
        height: 60,
        margin: 15,
        padding: 20,
        borderRadius: 20,
        borderColor: colors.white,
        backgroundColor: colors.gray700,


        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h4,
        color: colors.white,
        textAlign: "left",
},
})


export default styles