import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper