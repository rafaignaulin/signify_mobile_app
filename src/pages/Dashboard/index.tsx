import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import MusicCard from "../../components/molecules/MusicCard";
import { useAuth } from "../../hooks/auth";
import styles from "./styles";
import api from "../../services/api";
import colors from "../../../assets/colors";

import Icon from 'react-native-vector-icons/AntDesign';

interface IMusicCardProps {
    id: string;
    avatar: string|null;
    name: string;
    artist:{id:string, name:string};
}


const getMusics = async ():Promise<IMusicCardProps[]> => {
    const music: IMusicCardProps[] = await api.get('/musics/')
    return music.data
}

const Dashboard = () => {
    const [data, setData] = useState<IMusicCardProps[]>([]);     
    const [musics, setMusics] = useState<IMusicCardProps[]>([]);
    const [query, setQuery] = useState('')   
    const navigation = useNavigation();
    const { user, signOut } = useAuth();
    
    const handleLogout = async () => {
        signOut()

        navigation.navigate('Home')
    }

    const searchMusics = (text:string) => {
        const qry = text.toLowerCase()
        const filterMusic = data.filter(music => {
            return music.name.toLowerCase().includes(qry) || music.artist.name.toLowerCase().includes(qry)
        })
        if (qry == "") setMusics(data)
        setMusics(filterMusic)
    }

    useEffect(() => {
        (async () => {
          const music = await getMusics();
          setData(music);
          setMusics(music);
        })();
      }, []);

    const music = (item:IMusicCardProps) => {
        return (
        <TouchableOpacity onPress={() => navigation.navigate('MusicDetails', {musicId: item.id})}>
            <MusicCard id={item.id} avatar={item.avatar} title={item.name} artist={item.artist.name}/>
        </TouchableOpacity>
            )

    }

    return (
    <View style = {styles.container}>

        <View style={styles.header}>
            <Text style= {styles.headerText}>Seja bem vindo, {user.name}</Text>
            <Icon.Button style={{backgroundColor:colors.green}} name="logout" onPress={() => handleLogout()} >Logout</Icon.Button>
        </View>
        <View>
            <TextInput 
                style={styles.input}
                onChangeText={(qry) => {
                    setQuery(qry)
                    searchMusics(query)
                }}
                value={query}
                placeholder="Faça sua busca"
                placeholderTextColor= {colors.white}
            />
        </View>
        <FlatList data={musics} keyExtractor={item => item.id} renderItem={({item}) => music(item)} />
        <Icon.Button style={{backgroundColor:colors.green}} name="plus" onPress={() => navigation.navigate('AddMusic')} >Adicionar Musica</Icon.Button>

    </View>
        
        )



}


export default Dashboard