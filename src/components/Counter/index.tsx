import { View, Text } from "react-native";
import { styles } from './styles';

type CounterProps = {
  title: string;
  color: string;
  quantity: number;
}

export function Counter({ title, color, quantity }: CounterProps) {
  const style = styles({ color });

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <View style={style.quantityContainer}>
        <Text style={style.quantity}>{quantity}</Text>
      </View>
    </View>
  )
}