import React from 'react';
import {
  View,
  Platform,
  TextInput
} from 'react-native';
import CustomTextInputStyle from '../styles/CustomTextInputStyle';

interface CustomTextInputProps {
  containerStyle?: any,
  style?: any,
  autoFocus?: boolean,
  editable?: boolean,
  textColor?: string,
  onChangeText?: ((text: string) => void),
  value?: string,
  placeHolder?: string,
}

const CustomTextInput = (props) => {
    return(
      <View style={[CustomTextInputStyle.mainBlock, props.containerStyle]}>
        <View style={CustomTextInputStyle.textboxBlock}>
          <TextInput
            textColor={props.textColor}
            style={[CustomTextInputStyle.textInput,props.style]}
            labelFontSize={12}
            autoCapitalize={false}
            editable={props.editable}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeHolder}
            placeholderTextColor={'#2C3333'}
            autoFocus={props.autoFocus} />
        </View>
      </View>
    )
}

export default CustomTextInput;
