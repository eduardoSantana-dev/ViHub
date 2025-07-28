import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import EstudoCard from './estudoCard'


export default function ListaEstudos({ header }: Props) {
    const [estudos, setEstudos] = useState<estudo[]>([]);
    const swipeableRef = useRef<SwipeableMethods>(null);
    
 
    const carregarEstudos = () => {
        const temp = [
            { id: 1, nome: 'Estudo para o ENEM ', data: '20/20/2025' },
            { id: 2, nome: 'Vicuna', data: 'em andamento' },
            { id: 3, nome: 'TCC', data: 'atrasado' }
        ];
        setEstudos(temp);
    };
    useEffect(() => {
        carregarEstudos()
    }, [])

    return (

        <FlatList
            data={estudos}
            keyExtractor={(item, index) => item.id.toString()}

            renderItem={({ item: estudo }) => {

                return (
                        <EstudoCard estudo={estudo}/>
                
                )
            }}
            ListHeaderComponent={header ? () => <>{header}</> : null}


        />

    )

}

