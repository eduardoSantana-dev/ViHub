import { colors } from '@colors';
import { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Modal, Text, TouchableOpacity, View, TextInput, Pressable, StyleSheet } from 'react-native';
import ProjetoController from '@constrollers/projetoController';
import { set } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function EditarProjeto({ id }: { id: string }) {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const options = ['Em planejamento', 'Finalizado', 'Em andamento'];
    const [projeto, setProjeto] = useState<Projeto | null>(null);
    const [nome, setNome] = useState('')
    async function infoProjeto() {
        if (!id) return;
        try {
            const result = await ProjetoController.projetoInfo(id as string);
            setProjeto(result);
            console.log(result)
        } catch (error) {
            console.error("Erro ao busca informações do projeto:", error);
        }
    }
    async function abrirModal() {
        await infoProjeto();
        setSelected(projeto?.status || null);
        setNome(projeto?.nome || '');
        setVisible(true);
    }
    async function salvar() {
       
        try {
            await ProjetoController.atualizarProjeto(id, nome, selected as string);
            setVisible(false);
    }catch (error) {
            console.error("Erro ao atualizar projeto:", error);
            alert('Erro ao atualizar projeto');
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={() => abrirModal()} >
                <MaterialCommunityIcons color={colors.texto} name='pencil' size={25} />
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade">
                <View className='flex-1 items-center justify-center bg-fundoModal '>
                    <View className='w-5/6 px-4 py-4 bg-cards items-center  rounded-padrao '>
                        <View className='flex-row items-center justify-between w-full'>
                            <Text className='text-2xl color-texto font-inter-b'>Editar projeto</Text>
                            <TouchableOpacity onPress={() => setVisible(false)} >
                                <Ionicons name="close" size={27} color={colors.texto} />
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row border border-gray-700 rounded-padrao mt-7  w-full h-14 items-center px-2'>

                            <TextInput className='w-11/12 text-white font-inter-b text-lg'
                                placeholder="Nome"
                                placeholderTextColor={colors.texto2}
                                value={nome}
                                onChangeText={setNome}
                                maxLength={18}
                            />
                        </View>
                        <Text className='color-texto2 font-inter-b w-full mt-5 text-2xl'>Status</Text>
                        <View className='w-full mt-3'>
                            {options.map((option, index) => (
                                <Pressable
                                    key={index}
                                    className={`flex-row items-center px-4 py-2 w-full rounded-padrao ${selected === option ? 'bg-azul2' : 'bg-cards'
                                        }`}
                                    onPress={() => setSelected(option)}
                                >
                                    <View
                                        className={`w-4 h-4 rounded-full border mr-2 ${selected === option ? 'bg-azul border-azulescuro' : 'border-texto2'
                                            }`}
                                    />
                                    <Text className={` font-inter-b ${selected === option ? 'text-azul' : 'text-texto2'}`}>{option}</Text>
                                </Pressable>
                            ))}
                        </View>
                        <Pressable className='w-4/6 justify-center items-center mt-6 py-1 rounded-padrao bg-azul' onPress={() => salvar()}>
                            <Text className='font-inter-b text-2xl color-textobotao'>Salvar</Text>
                        </Pressable>
                        <View className='w-full mt-2 items-start'>
                            <Pressable onPress={() => ProjetoController.deletarProjeto(id)}>
                                <MaterialCommunityIcons name='delete' color={colors.texto2} size={20} />
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
}

