

import React, { useCallback, useState } from "react";

import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useAuth } from "../../hooks/auth";
import colors from "../../../assets/colors";
import Button from "../../components/atoms/Button";
import styles from "./styles";

import { useNavigation } from "@react-navigation/core";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigation = useNavigation()
    const { signIn }= useAuth()


    const handleLogin = useCallback(async (email:string, password:string) => {
        console.log(email,password)
        try {
            await signIn({email, password})
            navigation.navigate('Dashboard')
        }
        catch (error) {
            Alert.alert("Erro no login", "Favor tente novamente")
        }
        //await signIn({email:'admin@signify.com.br', password:'admin'})
        

    },[signIn])

    return (
        <View style={styles.view}>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.p}>Faça o login abaixo.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} ><Text style={styles.a}>Crie sua conta aqui</Text></TouchableOpacity>

            <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor= {colors.white}
            />
            <TextInput
                style={styles.input}
                onChangeText={(password)=> setPassword(password)}
                value={password}
                placeholder="Senha"
                keyboardType="default"
                secureTextEntry={true}
                placeholderTextColor= {colors.white}
            />
            <Button style={styles.button} onPress={() => handleLogin(email, password)}>Login</Button>
        </View >
    )
}

export default Login;