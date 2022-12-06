import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";
import text_size from "../../../../assets/text_size";



const styles = StyleSheet.create({

    card: {
        width: 360,
        height: 60,
        flexDirection: 'row',
        backgroundColor: colors.green,
        alignItems: 'center',
        borderRadius: 20,
        borderColor: colors.gray100,
        borderWidth: 1,
        marginBottom: 15
        
    },
    img: {
        marginLeft: '10%',
        marginRight: '10%',
    },
    cardtext: {
        flexDirection: 'column',
        justifyContent:'center'
    },
    text:{
        fontFamily: 'Montserrat-Bold',
        fontSize: text_size.h4,
        color: colors.white
    },
    textart:{
        fontFamily: 'Montserrat-Regular',
        fontSize: text_size.h5,
        color: colors.gray100,
        marginTop: 5
    }


})

export default styles;