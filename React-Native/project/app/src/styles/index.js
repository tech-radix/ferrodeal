import {StyleSheet} from 'react-native';

const STYLES = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 30,
  },
  input: {
    color: '#a5a5a5',
    borderColor: '#D0D0D0',
    borderWidth: 1,

    borderRightColor: 'red',
    flex: 1,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: 'red',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 38,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20, marginLeft: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;
