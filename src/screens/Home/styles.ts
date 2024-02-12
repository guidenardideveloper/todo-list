import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  primaryContainer: {
    height: 173,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    paddingTop: 24
  },
  
  logo: {
    marginTop: 24
  },

  secondaryContainer: {
    height: '100%',
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
  },

  formContainer: {
    width: 327,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: -32
  },

  input: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    color: '#F2F2F2',
    borderWidth: 1,
    borderColor: '#0D0D0D',
  },

  btnInput: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});