import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from '@expo/vector-icons';

type TaskProps = {
  text: string;
  isComplete: boolean;
  handleCompleteTask: () => void;
  handleRemoveTask: () => void;
}

export function Task({ text, isComplete, handleCompleteTask, handleRemoveTask }: TaskProps) {
  const style = styles({ isComplete });
  
  return (
    <View style={style.container}>
      <BouncyCheckbox
        size={17}
        fillColor='#5E60CE'
        textComponent={
          <Text style={style.text} numberOfLines={3} ellipsizeMode='tail'>
            {text}
          </Text>
        }
        innerIconStyle={{
          borderWidth: 2,
          borderColor: isComplete ? '#5E60CE' : '#4EA8DE'
        }}
        onPress={handleCompleteTask}
      />
      <TouchableOpacity style={style.trashBtn} onPress={handleRemoveTask}>
        <Feather name='trash-2' size={20} style={style.trashIcon}/>
      </TouchableOpacity>
    </View>
  )
}