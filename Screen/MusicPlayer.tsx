import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { TRACKS } from '../MusicTracks_data/TRACKS';
import Slider from '@react-native-community/slider';
import Iconic from "react-native-vector-icons/Ionicons";

const { height, width } = Dimensions.get("window");

const MusicPlayer = ({ navigation, route }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(route.params.index);
    const ref = useRef(null);
    useEffect(() => {
     setTimeout(() => {
        scrollToIndex(currentSongIndex)
     }, 50);
    }, [])
    
    const scrollToIndex = (index) => {
        ref.current.scrollToIndex({ animated: true, index });
    };

    const playPreviousSong = () => {
        if (currentSongIndex > 0) {
            setCurrentSongIndex(currentSongIndex - 1);
            scrollToIndex(currentSongIndex - 1);
        }
    };

    const playNextSong = () => {
        if (currentSongIndex < TRACKS.length - 1) {
            setCurrentSongIndex(currentSongIndex + 1);
            scrollToIndex(currentSongIndex + 1);
        }
    };
    
    
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                ref={ref}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={TRACKS}
                renderItem={({ item }) =>
                    <View style={styles.imgView}>
                        <Image source={{ uri: item.albumArtUrl }} style={styles.img} />
                    </View>
                }
                keyExtractor={item => item.id}
            />
            <View style={styles.trackinfo}>
                <Text style={{ fontSize: 23, fontWeight: 'bold', color: "black" }}>{TRACKS[currentSongIndex].title}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: "black" }}>{TRACKS[currentSongIndex].artist}</Text>
            </View>
            <Slider
                style={styles.slider}
                value={10}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="black"
                maximumTrackTintColor="black"
                thumbTintColor='black'
            />
            <View style={styles.button}>
                <TouchableOpacity onPress={playPreviousSong}>
                    <Iconic name="play-back" size={35} color={"black"} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 50, marginRight: 50 }}>
                    <Iconic name="play" size={35} color={"black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={playNextSong}>
                    <Iconic name="play-forward" size={35} color={"black"} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    trackinfo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100
    },
    imgView: {
        width: width,
        height: (height / 2) - 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    img: {
        marginTop: 50,
        borderRadius: 15,
        width: '90%',
        height: '100%',
    },
    slider: {
        height: 50,
        width: 320,
        color: "black",
    },
    button: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 100
    }
});

export default MusicPlayer;
