import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import text_size from "../../../assets/text_size";

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor:colors.black,
    },
    viewHeader:{
        backgroundColor:colors.white,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginBottom: '10%',
        text:{
            color: colors.black,
            fontFamily: 'Montserrat-Regular',
            marginLeft: 10
        }

    },
    viewMain: {
        flex:1,
        alignItems: "center",
    },
    input: {
        width: '90%',
        height:40,
        margin: 10,
        borderRadius: 10,
        borderColor: colors.white,
        backgroundColor: colors.gray700,


        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h4,
        color: colors.white,
        textAlign: 'center',
    },
    biginput: {
        width: '90%',
        height: '30%',
        margin: 10,
        borderRadius: 10,
        borderColor: colors.white,
        backgroundColor: colors.gray700,


        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h4,
        color: colors.white,
        textAlign: 'center',
    },

    button: {
        width: '90%',
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