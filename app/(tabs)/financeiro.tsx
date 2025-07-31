import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import database from '../../database/database';
import TarefaModel from '../../database/models/tarefa';

const TarefasTeste = () => {
  const [titulo, setTitulo] = useState('');
  const [tarefas, setTarefas] = useState<TarefaModel[]>([]);

  const adicionarTarefa = async () => {
    if (!titulo.trim()) return;

    await database.write(async () => {
      await database.get<TarefaModel>('tarefa').create(tarefa => {
        tarefa.title = titulo;
      });
    });

    setTitulo('');
    listarTarefas();
  };

  const listarTarefas = async () => {
    const resultado = await database.get<TarefaModel>('tarefa').query().fetch();
    setTarefas(resultado);
  };

  useEffect(() => {
    listarTarefas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite uma tarefa"
          placeholderTextColor="#999"
          value={titulo}
          onChangeText={setTitulo}
          style={styles.input}
        />
        <TouchableOpacity onPress={adicionarTarefa} style={styles.botao}>
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.tarefaTexto}>{item.title}</Text>
          </View>
        )}
        style={styles.lista}
      />
    </View>
  );
};

export default TarefasTeste;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#0A0D13',
  },
  title: {
    color: 'white',
    fontSize: 22,
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#151B26',
    color: 'white',
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 48,
  },
  botao: {
    backgroundColor: '#53E69E',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  botaoTexto: {
    color: '#0A0D13',
    fontWeight: 'bold',
  },
  lista: {
    flex: 1,
  },
  card: {
    backgroundColor: '#151B26',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  tarefaTexto: {
    color: 'white',
  },
});
