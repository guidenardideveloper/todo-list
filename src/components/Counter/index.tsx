import { View, Text } from "react-native";
import { styles } from './styles';

type PropsCounter = {
  createdNumber: number;
  completedNumber: number;
}

export function Counter({createdNumber, completedNumber}:PropsCounter) {
  return (
    <View style={styles.container}>
      <View style={styles.createContainer}>
        <Text style={styles.createText}>
          Criadas
        </Text>
        <View style={styles.containerCount}>
          <Text style={styles.textCount}>
            {createdNumber}
          </Text>
        </View>
      </View>

      <View style={styles.concludedContainer}>
        <Text style={styles.concludedText}>
          Concluídas
        </Text>
        <View style={styles.containerCount}>
          <Text style={styles.textCount}>
            {completedNumber}
          </Text>
        </View>
      </View>
    </View>
  )
}