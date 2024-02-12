import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from '@expo/vector-icons';

type TaskProps = {
  text: string;
}

export function Task({ text }: TaskProps) {
  const [checkboxState, setCheckboxState] = useState(false);
  
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={17}
        fillColor={checkboxState ? '#5E60CE' : '#4EA8DE'}
        innerIconStyle={{ borderWidth: 2 }}
        text={text}
        textStyle={{
          width: 235,
          fontSize: 14,
          color: checkboxState ? '#808080' : '#f2f2f2',
        }}
        isChecked={checkboxState}
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <TouchableOpacity style={styles.trashBtn}>
        <Feather name='trash-2' size={20} style={styles.trashIcon}/>
      </TouchableOpacity>
    </View>
  )
}