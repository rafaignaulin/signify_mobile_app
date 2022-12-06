

import React, { useState } from "react";

import { Alert, Text, TextInput, View } from "react-native"
import api from "../../services/api";
import colors from "../../../assets/colors";
import Button from "../../components/atoms/Button";
import styles from "./styles";
import  Icon  from "react-native-vector-icons/AntDesign";
import DocumentPicker from 'react-native-document-picker';

interface IAddMusic {
    name:string;
    artist_name:string;
    description:string;
    lyrics:string;
    playback_url:string;
    avatar?:string;
}


const AddMusic = ({navigation}) => {
    const [name, setName] = useState('')
    const [artistName, setArtistName] = useState('')
    const [description, setDescription] = useState('')
    const [playbackUrl, setPlaybackUrl] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [avatar, setAvatar] = useState([])


    
    const handleAddMusic = async ({name,artist_name,description,lyrics,playback_url,avatar}:IAddMusic) => {

        const verifyArtist = await api.get('/artists/search', {params:{name: artist_name}})
        if (verifyArtist.status == 200) {
            
            const artist_id = verifyArtist.data.id

            const musicData = new FormData();

            musicData.append('name', name)
            musicData.append('description', description)
            musicData.append('lyrics', lyrics)
            musicData.append('playback_url', playback_url)
            // musicData.append('avatar', avatar)

            try{
                const req = await api.post(`/musics/create/${artist_id}`, {musicData}, {
                    headers:{'Content-Type': 'multipart/form-data; '}
                } )
                console.log(req)
                
                if (req.status == 201){
                    navigation.navigate('Dashboard')
                }
            } catch (error) {
                console.log(error.response.data)
            }

        }

    }

    const handleAddAvatar = async () => {
        // Opening Document Picker to select one file
        try {
          const avatar = await DocumentPicker.pick({
            // Provide which type of file you want user to pick
            type: [DocumentPicker.types.images],
    
          });
          setAvatar(avatar);
    
        } catch (err) {
          setAvatar([]);
          // Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            // If user canceled the document selection
            Alert.alert('Canceled');
          } else {
            // For Unknown Error
            Alert.alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };

    return (
    <View style={styles.view}>
            
            <View style={styles.viewHeader}>
                <Icon.Button backgroundColor={colors.white} color={colors.black} name='left' onPress={() => navigation.goBack()} />
                <Text style={styles.viewHeader.text}>Adicionar uma musica</Text>
            </View>

        <View style={styles.viewMain}>
            <TextInput
                style={styles.input}
                onChangeText={(name) => setName(name)}
                value={name}
                placeholder="Name"
                placeholderTextColor= {colors.white}
                />
            <TextInput
                style={styles.input}
                onChangeText={(a_name) => setArtistName(a_name)}
                value={artistName}
                placeholder="Artist Name"
                placeholderTextColor= {colors.white}
                />
            <TextInput
                style={styles.input}
                onChangeText={(desc) => setDescription(desc)}
                value={description}
                placeholder="Description"
                placeholderTextColor= {colors.white}
                />
            <TextInput
                style={styles.input}
                onChangeText={(url) => setPlaybackUrl(url)}
                value={playbackUrl}
                placeholder="Playback URL"
                placeholderTextColor= {colors.white}
                />
            <TextInput
                style={styles.biginput}
                onChangeText={(lyrics) => setLyrics(lyrics)}
                value={lyrics}
                multiline={true}
                scrollEnabled={true}
                placeholder="Lyrics"
                placeholderTextColor= {colors.white}
                />
                <Button style={styles.button} onPress={() => handleAddAvatar()}>Anexar arquivo</Button>
            <Button style={styles.button} onPress={() => {
                handleAddMusic({
                    name,
                    artist_name:artistName,
                    description,
                    playback_url:playbackUrl,
                    lyrics,
                    avatar
                })}}>Adicionar Musica</Button>
        </View>
    </View >
    )
}

export default AddMusic;