import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({ value, setValue, placeholder, keyboardType='default', password=false }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor={'#2a2c2f'}
      keyboardType={keyboardType}
      secureTextEntry={password}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#f8dde2'
  },
})

export default Input