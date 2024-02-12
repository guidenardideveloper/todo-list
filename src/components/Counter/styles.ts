import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    alignSelf: 'center',
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  createContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },

  createText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE'
  },

  containerCount: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 8,
    paddingLeft: 8,
    backgroundColor: '#333333',
    borderRadius: 9,
  },

  textCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2f2f2'
  },

  concludedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  concludedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA'
  },
})