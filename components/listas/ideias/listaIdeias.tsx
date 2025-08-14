import { colors } from '@/styles/colors';
import database from '@database';
import { Ionicons } from '@expo/vector-icons';
import Ideias from '@modelsideias';
import { Q } from '@nozbe/watermelondb';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import IdeiaCard from './ideiaCard';

export default function ListaIdeias({ header, selecionado,idProjeto }: IdeiaProps) {
    const [ideias, setIdeias] = useState<Ideia[]>([]);
    const swipeableRef = useRef<SwipeableMethods>(null);
    const deletarIcon = () => {
        return (
            <RectButton style={[styles.icon_Swipeable, { marginRight: 25 }]} onPress={() => console.log('Delete pressed')}>
                <Ionicons name='trash' size={35} color={colors.vermelho} />
            </RectButton>
        );
    };
    async function deletarIdeia(id: string) {
        await database.write(async () => {
            const ideia = await database.get<Ideias>('ideias').find(id);
            if (ideia) {
                await ideia.destroyPermanently();
            }
        })
    }
    async function carregarideias(selecionado: string ) {
         let order: 'asc' | 'desc';
        if (selecionado === 'recente') {
             order ='desc';
        } else {
             order = 'asc';
        }    
        const subscription = database
            .get<Ideias>('ideias')
            .query(
                Q.where('id_projeto', idProjeto),
                Q.sortBy('criado_em', order)
            )
            .observe()
            .subscribe(setIdeias);

        return () => subscription.unsubscribe();

    };

    useEffect(() => {
        carregarideias(selecionado)
    
    }, [selecionado])

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

                        onSwipeableWillOpen={(direction) => deletarIdeia(ideia.id)}
                    >
                        <IdeiaCard ideia={ideia} />
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
