import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
export const KeyBoardDismiss = (props) => (
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
    >
        {props.children}
    </TouchableWithoutFeedback>
)

export default KeyBoardDismiss
