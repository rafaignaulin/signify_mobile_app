import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import text_size from "../../../assets/text_size";

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:colors.black,
        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h4,
        color: colors.white,
    },
    viewHeader:{
        backgroundColor:colors.white,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        text:{
            color: colors.black,
            fontFamily: 'Montserrat-Regular',
            marginLeft: 10
        }
    },
    viewMainHeader:{
        backgroundColor:colors.green,
        padding:'5%',
        title:{
            fontFamily: 'Montserrat-Bold',
            fontSize: text_size.h2,
            color: colors.white
        },
        subtitle:{
            fontFamily: 'Montserrat-Regular',
            fontSize: text_size.h4,
            color: colors.gray100
        }
    },
    textLyrics: {
      color: colors.white,
      padding: '5%',
      fontFamily: 'Montserrat-Regular',
      lineHeight: text_size.h2*1.1,
      fontSize: text_size.h3
    }
})
export default styles