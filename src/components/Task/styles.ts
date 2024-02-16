import { StyleSheet } from "react-native";

type StylesProps = {
  isComplete: boolean;
}

export const styles = (props: StylesProps) => StyleSheet.create({
  container: {
    width: 327,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 8,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: props.isComplete ? '#262626' : '#333333',
    borderWidth: 1,
    height: 64,
    marginBottom: 8,
  },
  text: {
    width: 225,
    color: props.isComplete ? '#808080' : '#F2F2F2',
    textDecorationLine: props.isComplete ? 'line-through' : 'none',
    fontSize: 14,
    marginLeft: 11,
    textAlign: 'left'
  },
  trashBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  trashIcon: {
    color: '#808080'
  }
});