import { View, Text } from "react-native";
import { styles } from './styles';

export function Counter() {
  return (
    <View style={styles.container}>
      <View style={styles.createContainer}>
        <Text style={styles.createText}>
          Criadas
        </Text>
        <View style={styles.containerCount}>
          <Text style={styles.textCount}>
            0
          </Text>
        </View>
      </View>

      <View style={styles.concludedContainer}>
        <Text style={styles.concludedText}>
          Concluídas
        </Text>
        <View style={styles.containerCount}>
          <Text style={styles.textCount}>
            0
          </Text>
        </View>
      </View>
    </View>
  )
}