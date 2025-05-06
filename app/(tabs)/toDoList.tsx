import React from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from "../hooks/useTarefas";

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Tarefas</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma tarefa..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <Button color="#9400D3" title="Adicionar" onPress={adicionarTarefa} />
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}> x </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#25292e' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#fff', backgroundColor: '#ffd3d' },
    inputContainer: { flexDirection: 'row', marginBottom: 10, backgroundColor: '#ffd3d' },
    input: { flex: 1, borderWidth: 1, borderColor: '#fff', padding: 10, borderRadius: 5, marginRight: 10, color: '#fff' },
    tarefaContainer: {
        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#25292e', padding: 15,
        marginBottom: 5, borderRadius: 5, shadowColor: '#fff', shadowOpacity: 0.4, shadowRadius: 3, elevation: 2, color: 'fff', borderColor: 'white', borderWidth: 1
    },
    tarefaTexto: { fontSize: 16, color: 'white' },
    remover: { fontSize: 18, color: '#fff' },
    text: {
        color: '#fff',
    },
});