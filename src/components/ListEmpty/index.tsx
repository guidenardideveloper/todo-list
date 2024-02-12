import { View, Text, Image } from "react-native";
import { styles } from './styles'

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Clipboard.png')} />
      <View>
        <Text style={styles.textBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}