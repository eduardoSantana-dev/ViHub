import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import InspiracaoCard from './inspiracaoCard'


export default function ListaInspiracoes({ header }: Props) {
    const [Inspiracoes, setInspiracoes] = useState<Inspiracoes[]>([]);
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
            deletarInspiracoes(id)
        }
        swipeableRef.current?.close();

    }
    async function deletarInspiracoes(id: number) {
        setInspiracoes(prev => prev.filter(t => t.id !== id));
    }
   
 
    const carregarInspiracoess = () => {
        const temp = [
            { id: 1, nome: 'ideia ', data: '20/20/2025' },
            { id: 2, nome: 'Vicuna', data: 'em andamento' },
            { id: 3, nome: 'TCC', data: 'atrasado' }
        ];
        setInspiracoes(temp);
    };
    useEffect(() => {
        carregarInspiracoess()
    }, [])

    return (

        <FlatList
            data={Inspiracoes}
            keyExtractor={(item, index) => item.id.toString()}

            renderItem={({ item: Inspiracoes }) => {

                return (

                    <ReanimatedSwipeable
                        ref={swipeableRef}
                        containerStyle={styles.Swipeable}
                        friction={2}
                        enableTrackpadTwoFingerGesture
                        rightThreshold={100}
                        renderRightActions={deletarIcon}
                       
                        onSwipeableWillOpen={(direction) => verificarLado(direction, Inspiracoes.id)}
                    >
                        <InspiracaoCard Inspiracoes={Inspiracoes}/>
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
