import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet,View } from 'react-native';
import MaterialCard from './materialCard';



export default function ListaMateriais({ header }: Props) {
    const [materiais, setMateriais] = useState<material[]>([]);


    const carregarMateriais = () => {
        const temp = [
            { id: 1, nome: 'Video sobre regra de 3', data:'10/20/2025'},
            { id: 2, nome: 'Vicuna', data:'10/20/2025'},
            { id: 3, nome: 'TCC', data:'10/20/2025'}
        ];
        setMateriais(temp);
    };
    useEffect(() => {
        carregarMateriais()
    }, [])

    return (

        <FlatList
            data={materiais}
            keyExtractor={(item, index) => item.id.toString()}

            renderItem={({ item: material }) => {

                return (


                   <View className='mt-1'>
                     <MaterialCard material={material} />
                   </View>


                )
            }}
            ListHeaderComponent={header ? () => <>{header}</> : null}


        />

    )

}

