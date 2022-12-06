

import React, { useState } from "react";

import { Text, TextInput, TouchableOpacity, View } from "react-native"
import colors from "../../../assets/colors";
import Button from "../../components/atoms/Button";
import styles from "./styles";

import { useNavigation } from "@react-navigation/core";
import api from "../../services/api";

interface ISignUP {
    name:string;
    email:string;
    password:string;
}

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigation = useNavigation()

    const handleSignUp = async ({name, email, password}:ISignUP) => {
        
        const req = await api.post("/users", {name, email, password})

        if (req.status == 201){
            navigation.navigate('Login')
        }

    }

    return (
        <View style={styles.view}>
            <Text style={styles.text}>SignUp</Text>
            <Text style={styles.p}>Crie sua conta e junte-se conosco.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.a}>Ja possui uma conta? Faça login aqui.</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                onChangeText={(name) => setName(name)}
                value={name}
                placeholder="Name"
                placeholderTextColor= {colors.white}
            />
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
            <Button style={styles.button} onPress={() => handleSignUp({name, email, password})}>Criar Conta</Button>
        </View >
    )
}

export default SignUp;