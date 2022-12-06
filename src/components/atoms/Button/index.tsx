import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";


const Button = (props: TouchableOpacityProps) => {
    return (
        <TouchableOpacity style={styles.button}{...props}>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}


export default Button