import { colors } from '@colors';
import { Ionicons } from '@expo/vector-icons';
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Modal, Pressable, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { format, isThisWeek, isToday, isTomorrow, set } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import tarefaController from '@constrollerstarefaController';

export interface ModalHandles {
    abrirModal: () => void;

}
interface EditarTarefaProps {
    tipo: string;
    idTarefa: string;
}

const EditarTarefa = forwardRef<ModalHandles, EditarTarefaProps>(
    ({ tipo, idTarefa }, ref) => {
        const id = idTarefa

        const [visible, setVisible] = useState(false);
        const [date, setDate] = useState(new Date());
        const [show, setShow] = useState(false);
        const [mode, setMode] = useState<'date' | 'time'>('date');
        const [showPrazo, setShowPrazo] = useState(false)
        const [selected, setSelected] = useState<string | null>(null);
        const options = ['a fazer', 'finalizado', 'atrasado'];
        const [desc, setDesc] = useState('false');


        function formatarDataPersonalizada(date: Date): string {
            if (isToday(date)) return `Hoje às ${format(date, "HH:mm")}`;
            if (isTomorrow(date)) return `Amanhã às ${format(date, "HH:mm")}`;
            if (isThisWeek(date)) return format(date, "EEEE 'às' HH:mm", { locale: ptBR });
            return format(date, "d 'de' MMMM 'às' HH:mm", { locale: ptBR });
        }

        const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {

            if (selectedDate) {
                setDate(selectedDate);
            }
            if (mode == 'date') {
                setMode('time')
            } else {
                setMode('date')
                setShow(Platform.OS === 'ios');
            }
        };

        useImperativeHandle(ref, () => ({
            abrirModal: () => setVisible(true),

        }));
        async function buscarTarefa() {
            if (tipo == 'projeto') {
                const tarefa = await tarefaController.tarefaProjetoInfo(id)
                setarTarefa(tarefa.descricao, tarefa.prazo, tarefa.status)
            }
        }
        async function setarTarefa(desc: string, prazo: string, status: string) {
            setDesc(desc)
            if (prazo != '') {
                const datePrazo = new Date(prazo)
                setDate(datePrazo)
                setShowPrazo(true)
            }
            setSelected(status)

        }
        useEffect(() => {
            if (visible) {
                buscarTarefa()

            }
        }, [visible])
        async function salvar() {
            var prazo: Date | null = date;
             if(!showPrazo){
                prazo = null;
            }
            try {
                if (tipo == 'projeto') {
                    await tarefaController.atualizarTarefaProjeto(desc, id, prazo, selected!)
                }
                setVisible(false)
                setShowPrazo(false)
                

            } catch (error) {
                alert('erro')
            }


        }
        return (
            <View>

                <Modal visible={visible} transparent animationType="fade">
                    <View className='flex-1 items-center justify-center bg-fundoModal'>
                        <View className='w-5/6 px-4 py-4 bg-cards items-center rounded-padrao'>
                            <View className='flex-row items-center justify-between w-full'>
                                <Text className='text-2xl color-texto font-inter-b'>Editar tarefa</Text>
                                <TouchableOpacity onPress={() => { setVisible(false), setShowPrazo(false) }}>
                                    <Ionicons name="close" size={27} color={colors.texto} />
                                </TouchableOpacity>
                            </View>

                            <View className='flex-row border border-gray-700 rounded-padrao mt-7 w-full h-52 items-center px-2'>
                                <TextInput
                                    className="w-11/12 h-full text-white font-inter-b"
                                    style={{ textAlignVertical: 'top' }}
                                    multiline
                                    placeholder="Descrição"
                                    maxLength={300}
                                    value={desc}
                                    onChangeText={text => setDesc(text)}
                                    placeholderTextColor={colors.texto2}
                                />
                            </View>

                            {showPrazo ? (
                                <View className='w-full flex-row items-center mt-7 gap-3'>
                                    <TouchableOpacity
                                        className='flex-row border border-gray-700 rounded-padrao  w-10/12 h-14 items-center px-3'
                                        onPress={() => setShow(true)}
                                    >
                                        <Text className='color-texto font-inter-m texto-lg'>{formatarDataPersonalizada(date)}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setShowPrazo(false)}>
                                        <Ionicons name="close" size={27} color={colors.texto2} />
                                    </TouchableOpacity>
                                </View>
                            ) :
                                <TouchableOpacity className='w-full justify-center items-center mt-6 py-2 rounded-padrao bg-azul2' onPress={() => setShowPrazo(true)}>
                                    <Text className='font-inter-b text-xl color-texto'>Definir prazo</Text>
                                </TouchableOpacity>
                            }
                            <Text className='color-texto2 font-inter-b w-full mt-5 text-2xl'>Status</Text>
                            <View className='w-full mt-3'>
                                {options.map((option, index) => (
                                    <Pressable
                                        key={index}
                                        className={`flex-row items-center px-1 py-2 w-full rounded-padrao ${selected === option ? 'bg-azul2' : 'bg-cards'
                                            }`}
                                        onPress={() => setSelected(option)}
                                    >
                                        <View
                                            className={`w-4 h-4 rounded-full border mr-2 ${selected === option ? 'bg-azul border-azulescuro' : 'border-texto2'
                                                }`}
                                        />
                                        <Text className={`font-inter-b ${selected === option ? 'text-azul' : 'text-texto2'}`}>{option}</Text>
                                    </Pressable>
                                ))}
                            </View>

                            <TouchableOpacity className='w-4/6 justify-center items-center mt-7 py-1 rounded-padrao bg-azul' onPress={() => salvar()}>
                                <Text className='font-inter-b text-2xl color-textobotao'>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {show && (
                    <DateTimePicker
                        value={date}
                        mode={mode}
                        display={Platform.OS === 'ios' ? 'inline' : 'default'}
                        onChange={onChange}
                    />
                )}
            </View>
        );
    })

export default EditarTarefa;
