import { colors } from '@colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Button, Modal, Text, TouchableOpacity, View, TextInput, Pressable } from 'react-native';

import ProjetoController from '@constrollers/projetoController';

export default function CriarProjeto() {
    const [visible, setVisible] = useState(false);
    const [nome, setNome] = useState('');
    async function criarProjeto() {
        try {
            await ProjetoController.CriarProjeto(nome, '1','Em andamento');
            
        }
       catch (error) {
        console.error("Erro ao criar projeto:", error);
        alert('Erro ao criar projeto');
    }
}

return (
    <View>
        <TouchableOpacity onPress={() => setVisible(true)} >
            <Ionicons name="add-circle-outline" size={45} color={colors.texto2} />
        </TouchableOpacity>
        <Modal visible={visible} transparent animationType="fade">
            <View className='flex-1 items-center justify-center bg-fundoModal '>
                <View className='w-5/6 px-4 py-4 bg-cards items-center  rounded-padrao '>
                    <View className='flex-row items-center justify-between w-full'>
                        <Text className='text-2xl color-texto font-inter-b'>Novo projeto</Text>
                        <TouchableOpacity onPress={() => setVisible(false)} >
                            <Ionicons name="close" size={27} color={colors.texto} />
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row border border-gray-700 rounded-padrao mt-7  w-full h-14 items-center px-2'>

                        <TextInput className='w-11/12 text-white font-inter-b'
                            placeholder="Nome"
                            onChangeText={(texto)=>setNome(texto)}
                            placeholderTextColor={colors.texto2}
                            maxLength={18}
                        />
                    </View>
                    <Pressable className='w-4/6 justify-center items-center mt-6 py-1 rounded-padrao bg-azul' onPress={() => criarProjeto()}>
                        <Text className='font-inter-b text-2xl color-textobotao'>Criar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>
);
}
