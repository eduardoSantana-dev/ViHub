import { colors } from '@/styles/colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Pressable, RectButton, Text } from 'react-native-gesture-handler';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import CardTarefa from './tarefaCard';
import EditarTarefa, { ModalHandles } from '@modais/tarefa/editarTarefaModal';

export default function TarefaLista({ header }: Props) {

    const [tarefas, setTarefas] = useState<tarefa[]>([]);
    const swipeableRef = useRef<SwipeableMethods>(null);
    const modalRef = useRef<ModalHandles>(null)
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
            { id: 1, nome: 'O céu estava limpo, e o vento suave balançava as árvores enquanto o sol dourado iluminava os campos. Pessoas caminhavam tranquilas pelas ruas, aproveitando cada instante daquele dia perfeito.', fase: 'finalizado' },
            { id: 2, nome: 'Vicuna', fase: 'em andamento' },
            { id: 3, nome: 'TCC', fase: 'atrasado' }
        ];
        setTarefas(temp);
    };
    useEffect(() => {
        carregarTarefas()
    }, [])
    const abrirModal = () => {
        modalRef.current?.abrirModal()
    }
    return (
        <>

           
            <EditarTarefa ref={modalRef} />
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
                        <Pressable onPress={abrirModal}>

                        <CardTarefa tarefa={tarefa}/>
                        </Pressable>
                    </ReanimatedSwipeable>

                )
            }}
            ListHeaderComponent={header ? () => <>{header}</> : null}


        /> 

        </>
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
