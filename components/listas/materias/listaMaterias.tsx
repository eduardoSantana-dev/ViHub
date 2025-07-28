import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet,View } from 'react-native';
import MateriaCard from './materiaCard';



export default function ListaMaterias({ header }: Props) {
    const [materias, setMaterias] = useState<materia[]>([]);


    const carregarMaterias = () => {
        const temp = [
            { id: 1, nome: 'Matematica ', totalTarefas: 15 ,completadas:10},
            { id: 2, nome: 'Vicuna', totalTarefas: 30 ,completadas:2},
            { id: 3, nome: 'TCC', totalTarefas: 10 ,completadas:10}
        ];
        setMaterias(temp);
    };
    useEffect(() => {
        carregarMaterias()
    }, [])

    return (

        <FlatList
            data={materias}
            keyExtractor={(item, index) => item.id.toString()}

            renderItem={({ item: materia }) => {

                return (


                   <View className='mt-1'>
                     <MateriaCard materia={materia} />
                   </View>


                )
            }}
            ListHeaderComponent={header ? () => <>{header}</> : null}


        />

    )

}

