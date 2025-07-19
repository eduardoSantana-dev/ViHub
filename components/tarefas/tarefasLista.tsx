import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import CardTarefa from './tarefaCard'
interface Props {
    header?: React.ReactNode;
}
type tarefa = {
    id: number;
    nome: string;
    fase: string
}
export default function TarefaLista({ header }: Props) {
    const [tarefas, setTarefas] = useState<tarefa[]>([]);
    const swipeableRef = useRef<SwipeableMethods>(null);
    const deletarIcon = () => {
        return (
            <RectButton style={[styles.icon_Swipeable, { marginRight: 25 }]} onPress={() => console.log('Delete pressed')}>
                <Ionicons name='trash' size={35} color={colors.vermelho} />
            </RectButton>
        );
    };
    const finalizarIcon = () => {
        return (
            <RectButton style={[styles.icon_Swipeable, { marginLeft: 25 }]} onPress={() => console.log('Delete pressed')}>
                <Ionicons name='checkmark-circle-outline' size={35} color={colors.verde} />
            </RectButton>
        );
    };
    function verificarLado(direction: string, id: number) {

        if (direction == 'left') {
            deletarTarefa(id)
        }
        if (direction == 'right') {
            finalizar(id)

        }
        swipeableRef.current?.close();

    }
    async function deletarTarefa(id: number) {
        setTarefas(prev => prev.filter(t => t.id !== id));
    }
    function finalizar(id: number,) {
        setTarefas(prev =>
            prev.map(tarefa =>
                tarefa.id === id ? { ...tarefa, fase: 'finalizado' } : tarefa
            )
        );

    }
    const carregarTarefas = () => {
        const temp = [
            { id: 1, nome: 'Testa api com laravel e no banco com tudo incluso ,teste no app e no web para ', fase: 'finalizado' },
            { id: 2, nome: 'Vicuna', fase: 'em andamento' },
            { id: 3, nome: 'TCC', fase: 'atrasado' }
        ];
        setTarefas(temp);
    };
    useEffect(() => {
        carregarTarefas()
    }, [])

    return (

        <FlatList
            data={tarefas}
            keyExtractor={(item, index) => item.id.toString()}

            renderItem={({ item: tarefa }) => {

                return (

                    <ReanimatedSwipeable
                        ref={swipeableRef}
                        containerStyle={styles.Swipeable}
                        friction={2}
                        enableTrackpadTwoFingerGesture
                        rightThreshold={100}
                        renderRightActions={deletarIcon}
                        renderLeftActions={finalizarIcon}
                        onSwipeableWillOpen={(direction) => verificarLado(direction, tarefa.id)}
                    >
                        <CardTarefa tarefa={tarefa}/>
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
