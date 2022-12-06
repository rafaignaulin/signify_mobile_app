import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, Alert } from "react-native"
import api from "../../services/api";
import Button from "../../components/atoms/Button";
import styles from "./styles";

import  Icon  from "react-native-vector-icons/AntDesign";
import colors from "../../../assets/colors";
import YoutubePlayer from 'react-native-youtube-iframe';

interface IMusic {
    id:string;
    name:string;
    description:string;
    avatar:string;
    lyrics:string;
    playback_url:string;
    artist: string;
    created_at: Date;
}

const getMusic = async (id:string): Promise<IMusic> => {
    const music:IMusic = await api.get(`/musics/search/${id}`)
    return music.data
}


const MusicDetails = ({navigation, route}) => {
    const [music, setMusic] = useState<IMusic>('')
    const [musicId] = useState(route.params.musicId)
    
    useEffect(() => {
        (async () => {
            const music = await getMusic(musicId);
            const ms = {
                id: music.id,
                name: music.name,
                description: music.description,
                avatar:music.avatar,
                lyrics:music.lyrics,
                playback_url:music.playback_url,
                artist:music.artist.name,
                created_at:music.created_at
            }
            setMusic(ms);
        })();
    }, []);
    
    const handleDelete = async (id:string) => {
        const req = await api.post(`/musics/delete/${id}`)
        if (req.status==204){
            Alert.alert("Aviso", "Musica excluida com sucesso")
            navigation.navigate('Dashboard')
        }
    }
    
    console.log(music)
    return (
        <View style={styles.view}>

            <View style={styles.viewHeader}>
                <Icon.Button backgroundColor={colors.white} color={colors.black} name='left' onPress={() => navigation.goBack()} />
                <Text style={styles.viewHeader.text}>Detalhes da musica</Text>
            </View>
            <View style={styles.viewMainHeader}>
                <Text style={styles.viewMainHeader.title}>{music.name}</Text>
                <Text style={styles.viewMainHeader.subtitle}>{music.artist}</Text>
                <Text style={styles.viewMainHeader.subtitle}>{music.description}</Text>
            </View>
            <ScrollView>
                <Text style={styles.textLyrics}>{music.lyrics}</Text>
                
                 <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={music.playback_url.split('v=')[1]}
                /> 
            <Icon.Button  backgroundColor='#c61a09' color={colors.white} name='delete' onPress={() => handleDelete(music.id)}>Delete</Icon.Button>
            </ScrollView>
        </View>
    )
}

export default MusicDetails