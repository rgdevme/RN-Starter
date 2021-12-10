import React, { useState } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native'

const Input = () => {
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState([])

  const validate = newValue => {
    setValue(newValue)

    let newErrors = []

    if (value.length < 5) {
      newErrors.push('Length must be grater than 5')
    } else {
      newErrors = []
    }

    setErrors(newErrors)
  }

  return (
    <View style={{ margin: 8 }}>
      <Text style={{ marginBottom: 4 }}>Enter password: </Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          value={value}
          onChangeText={validate}
        />
        <View style={{ width: 8 }} />
        <Text style={{ flex: 1 }}>{value}</Text>
      </View>
      <FlatList
        keyExtractor={(_, i) => i}
        data={errors}
        renderItem={({ item }) => (
          <Text style={{ color: 'red' }}>• {item}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1
  }
})

export default Input
