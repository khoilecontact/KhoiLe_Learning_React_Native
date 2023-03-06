import { StyleSheet } from 'react-native';

const CustomTextInputStyle = StyleSheet.create({
  mainBlock: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textboxBlock: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  textInput: {
    height: 40,
    padding: 10,
  },
  textInputAndroid: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
  },
});

export default CustomTextInputStyle;
