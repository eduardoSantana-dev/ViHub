import { colors } from '@colors';
import { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Modal, Text, TouchableOpacity, View, TextInput, Pressable, StyleSheet } from 'react-native';

export default function EditarMateria() {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    



    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(true)} className='ml-3' >
                <MaterialCommunityIcons color={colors.texto} name='pencil' size={30} />
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade">
                <View className='flex-1 items-center justify-center bg-fundoModal '>
                    <View className='w-5/6 px-4 py-4 bg-cards items-center  rounded-padrao '>
                        <View className='flex-row items-center justify-between w-full'>
                            <Text className='text-2xl color-texto font-inter-b'>Editar materia</Text>
                            <TouchableOpacity onPress={() => setVisible(false)} >
                                <Ionicons name="close" size={27} color={colors.texto} />
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row border border-gray-700 rounded-padrao mt-7  w-full h-14 items-center px-2'>

                            <TextInput className='w-11/12 text-white font-inter-b text-lg'
                                placeholder="Nome"
                                placeholderTextColor={colors.texto2}
                                value='Vihub'
                                maxLength={18}
                            />
                        </View>
                        
                        
                        <Pressable className='w-4/6 justify-center items-center mt-6 py-1 rounded-padrao bg-azul'>
                            <Text className='font-inter-b text-2xl color-textobotao'>Salvar</Text>
                        </Pressable>
                        <View className='w-full mt-2 items-start'>
                            <Pressable  onPress={()=> alert('a')}>
                               <MaterialCommunityIcons name='delete' color={colors.texto2} size={20}/>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
}

