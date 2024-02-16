import { StyleSheet } from "react-native";

type StylesProps = {
  color: string;
}

export const styles = (props?: StylesProps) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: props?.color,
    marginRight: 8,
  },
  quantityContainer: {
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#d9d9d9'
  }
});