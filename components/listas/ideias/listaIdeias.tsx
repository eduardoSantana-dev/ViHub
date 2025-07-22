import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import IdeiaCard from './ideiaCard'


export default function ListaIdeias({ header }: Props) {
    const [ideias, setIdeias] = useState<ideia[]>([]);
    const swipeableRef = useRef<SwipeableMethods>(null);
    const deletarIcon = () => {
        return (
            <RectButton style={[styles.icon_Swipeable, { marginRight: 25 }]} onPress={() => console.log('Delete pressed')}>
                <Ionicons name='trash' size={35} color={colors.vermelho} />
            </RectButton>
        );
    };
    function verificarLado(direction: string, id: number) {

        if (direction == 'left') {
            deletarideia(id)
        }
        swipeableRef.current?.close();

    }
    async function deletarideia(id: number) {
        setIdeias(prev => prev.filter(t => t.id !== id));
    }
   
 
    const carregarideias = () => {
        const temp = [
            { id: 1, nome: 'Testa api com laravel e no banco com tudo incluso ,teste no app e no web  Testa api com laravel e no banco com tudo incluso ,teste no app e no web ', data: '20/20/2025' },
            { id: 2, nome: 'Vicuna', data: 'em andamento' },
            { id: 3, nome: 'TCC', data: 'atrasado' }
        ];
        setIdeias(temp);
    };
    useEffect(() => {
        carregarideias()
    }, [])

    return (

        <FlatList
            data={ideias}
            keyExtractor={(item, index) => item.id.toString()}

            renderItem={({ item: ideia }) => {

                return (

                    <ReanimatedSwipeable
                        ref={swipeableRef}
                        containerStyle={styles.Swipeable}
                        friction={2}
                        enableTrackpadTwoFingerGesture
                        rightThreshold={100}
                        renderRightActions={deletarIcon}
                       
                        onSwipeableWillOpen={(direction) => verificarLado(direction, ideia.id)}
                    >
                        <IdeiaCard ideia={ideia}/>
                    </ReanimatedSwipeable>

                )
            }}
            ListHeaderComponent={header ? () => <>{header}</> : null}


        />

    )

}
const styles = StyleSheet.create({
    Swipeable: {
        marginTop: 25,
        justifyContent: 'center',
        paddingHorizontal: 25,

    },
    icon_Swipeable: {

        alignItems: 'center',
        justifyContent: 'center',


    }
});
