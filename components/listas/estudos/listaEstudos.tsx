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
import { buscarIdUsuario } from '@routeFunctions*';
import Estudos from '@modelsestudos';
import database from '@database';
import { Q } from '@nozbe/watermelondb';
export default function ListaIdeias({ header, selecionado, pesquisa }: ListaProps) {
    const [estudos, setEstudos] = useState<Estudos[]>([]);
    const swipeableRef = useRef<SwipeableMethods>(null);
    
 
   useEffect(() => {
       async function fetchProjetos() {
         const idUser =  await buscarIdUsuario();
        var queryCondition = Q.and( Q.where('status', selecionado),Q.where('id_usuario', idUser!));
        if (selecionado == 'todos') {
           queryCondition = Q.and(Q.where('id_usuario', idUser!));
        }
                
        if (selecionado != '') {
            
            const subscription = database
            .get<Estudos>('estudos')
            .query(queryCondition)
            .observe()
            .subscribe(setEstudos);
            return () => subscription.unsubscribe();
            
        }
    }
        fetchProjetos();
        
    }, [selecionado]);


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

