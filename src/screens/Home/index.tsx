import { styles } from './styles';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Task } from '../../components/Task';
import { Counter } from "../../components/Counter";
import { ListEmpty } from "../../components/ListEmpty";
import { View, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";

type Task = {
  id: number;
  text: string;
  isComplete: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskValue, setNewTaskValue] = useState('');


  function handleCreateTask() {
    if (!newTaskValue.length) {
      return Alert.alert('Ops!', 'Por favor, insira uma nova tarefa')
    }

    setTasks((prevState) => {
      return [
        ...prevState,
        {
          id: Date.now(),
          text: newTaskValue,
          isComplete: false,
        },
      ]
    })

    setNewTaskValue('');
  }

  function handleCompleteTask(id: number) {
    setTasks((prevState) => 
      prevState.map((prev) =>
        prev.id === id ? { ...prev, isComplete: !prev.isComplete } : { ...prev }
      )
    );
  }

  function handleRemoveTask(id: number) {
    Alert.alert('Remover', 'Tem certeza que deseja remover esta tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTasks((prevState) => prevState.filter((prev) => prev.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  const completedTasks = tasks.filter((task) => task.isComplete)

  
  return (
    <SafeAreaView>
      <View style={styles.primaryContainer}>
        <Image
          source={require('../../../assets/Logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.secondaryContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor='#808080'
            cursorColor='#f2f2f2'
            onChangeText={setNewTaskValue}
            value={newTaskValue}
          />
          <TouchableOpacity style={styles.btnInput} activeOpacity={0.7} onPress={handleCreateTask}>
            <Feather name="plus-circle" size={20} color={'#f2f2f2'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.containerCounter}>
            <Counter title='Criadas' color='#4EA8DE' quantity={tasks.length}/>
            <Counter title='Concluídas' color = '#8284FA' quantity={completedTasks.length}/>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={(item, index) => item.text + index.toString()}
            renderItem={({ item }) => {
              return (
                <View>
                  <Task
                    isComplete={item.isComplete}
                    text={item.text}
                    handleCompleteTask={() => handleCompleteTask(item.id)}
                    handleRemoveTask={() => handleRemoveTask(item.id)}
                  />
                </View>
              )
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 40}}
            ListEmptyComponent={<ListEmpty/>}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}