import React from "react";
import { styles } from './styles';
import { View, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons'
import { Counter } from "../../components/counter";
import { ListEmpty } from "../../components/list-empty";

export function Home() {
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
          />
          <TouchableOpacity style={styles.btnInput} activeOpacity={0.7}>
            < Feather name="plus-circle" size={20} color={'#f2f2f2'}/>
          </TouchableOpacity>
        </View>

        <Counter/>
        <ListEmpty/>
      </View>
    </SafeAreaView>
  )
}