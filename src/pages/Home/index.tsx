
import { useNavigation } from "@react-navigation/core";
import React from "react";

import { Image, Text, View } from "react-native"
import Button from "../../components/atoms/Button";
import styles from "./styles";
import logo from 'C:/Users/rafael.ignaulin/Desktop/UNO/javascripto/dev_mobile/assets/colors.js'

const Home = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.view}>
            <Image source={logo} />
            <Text style={styles.text}>Signify</Text>
            <Text style={styles.p}>Seja bem vindo ao Signify. Feito por apaixonados por música.</Text>
            <Button  onPress={() => navigation.navigate('Login')}>Login</Button>
            <Button onPress={() => navigation.navigate('SignUp')}>Criar conta</Button>
        </View >
    )
}

export default Home;
