//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TRACKS } from '../MusicTracks_data/TRACKS';
import Slider from '@react-native-community/slider';
// create a component
const MusicList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {TRACKS.map((track, index) =>
                <View key={index} >
                    <TouchableOpacity style={styles.trackContainer} onPress={() => navigation.navigate('Musicplayer', { title: track.title, artist: track.artist, albumimg: track.albumArtUrl, index:index })}>
                        <View >
                            <Image source={{ uri: track.albumArtUrl }} style={styles.albumimage} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.title}>{track.title}</Text>
                            <Text style={styles.artist}>{track.artist}</Text></View>
                    </TouchableOpacity>
                </View> 
               
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //alignItems: 'center',
    },
    trackContainer: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: 'black',
    },
    albumimage: {
        height: 50,
        width: 50,
        borderRadius: 6
    },
    title: {
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    },
    artist: {
        color: "black",
        paddingRight: 80
    }
});

//make this component available to the app
export default MusicList;
