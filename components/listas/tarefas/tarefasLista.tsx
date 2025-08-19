import { colors } from '@/styles/colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Pressable, RectButton, Text } from 'react-native-gesture-handler';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import CardTarefa from './tarefaCard';
import EditarTarefa, { ModalHandles } from '@modais/tarefa/editarTarefaModal';
import { buscarIdUsuario } from '@routeFunctions';
import tarefaController from '@constrollerstarefaController';
import  database  from '@database';
import { Q } from '@nozbe/watermelondb'; 
export default function TarefaLista({ header,selecionado,id_atividade }: { header?: React.ReactNode, selecionado: string, id_atividade:string}) {

    const [tarefas, setTarefas] = useState<TarefaProjeto[]>([]);
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
    function verificarLado(direction: string, id: string) {

        if (direction == 'left') {
            deletarTarefa(id)
        }
        if (direction == 'right') {
            finalizar(id)

        }
        swipeableRef.current?.close();

    }
    async function deletarTarefa(id: string) {
        tarefaController.deletarTarefaProjeto(id
            
        )
    }
    function finalizar(id: string,) {
        setTarefas(prev =>
            prev.map(tarefa =>
                tarefa.id === id ? { ...tarefa, fase: 'finalizado' } : tarefa
            )
        );

    }
    async function carregarTarefas (){
        
        var queryCondition = Q.and( Q.where('status', selecionado),Q.where('id_projeto', id_atividade!));
        if (selecionado == 'todos') {
           queryCondition = Q.and(Q.where('id_projeto', id_atividade!));
           
        }
                
        if (selecionado != '') {
            
            const subscription = database
            .get<any>('tarefas_projeto')
            .query(queryCondition)
            .observe()
            .subscribe(setTarefas);
            return () => subscription.unsubscribe();
            
        }
    };
    useEffect(() => {
        carregarTarefas()
    }, [selecionado])
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
