import React from "react";
import { styles } from './styles';
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

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
          <TouchableOpacity style={styles.btnInput}>
            <Text>++</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}