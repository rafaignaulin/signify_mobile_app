import React from 'react';
import { Image, Text, View } from "react-native"
import styles from './styles';


interface IMusicCardProps {
    id?: string;
    avatar?: string;
    title: string;
    artist: string;
}



const MusicCard = ({id,avatar,title, artist}:IMusicCardProps) => {
    return (
            <View style={styles.card} key={id}>
                <Image style={styles.img} source={{uri:avatar}}/>
                <View style={styles.cardtext}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.textart}>{artist}</Text>
                </View>
            </View>
    )

}

export default MusicCard