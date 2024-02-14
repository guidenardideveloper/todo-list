import React, { useState } from 'react';
import { styles } from './styles';
import { View, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Counter } from "../../components/Counter";
import { ListEmpty } from "../../components/ListEmpty";
import { Task } from '../../components/Task';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksName, setTaskName] = useState('');
  const [completeNumber, setCompleteNumber] = useState(0);

  
  function handleTaskAdd() {
    if(tasksName === '') {
      return Alert.alert('Campo vazio', 'Por favor, adicione uma tarefa.')
    }

    if (tasks.includes(tasksName)) {
      return Alert.alert('Tarefa existe', `Já existe a tarefa "${tasksName}" em sua lista.`)
    }

    setTasks(prevState => [...prevState, tasksName]);
    setTaskName('')
    
  }

  function handleTaskRemove(taskName: string) {
    Alert.alert('Remover', `Deseja remover a tarefa "${taskName}?"`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task !== taskName))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function countConcluded(checked: boolean) {
    if (checked) {
      setCompleteNumber(completeNumber + 1)
    } else {
      setCompleteNumber(completeNumber - 1)
    }
  }

  
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
            onChangeText={setTaskName}
            value={tasksName}
          />
          <TouchableOpacity style={styles.btnInput} activeOpacity={0.7} onPress={handleTaskAdd}>
            <Feather name="plus-circle" size={20} color={'#f2f2f2'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <Counter
            createdNumber={tasks.length}
            completedNumber={completeNumber}
          />

          <FlatList
            data={tasks}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Task
                key={item}
                text={item}
                onRemove={() => handleTaskRemove(item)}
                onCheck={(checked) => countConcluded(checked)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<ListEmpty/>}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}