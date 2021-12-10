import React from 'react'
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
  const { navigate } = navigation
  return (
    <View>
      <Text>Hi there!</Text>
      <Button title='Tutorial!' onPress={() => navigate('Tutorial')} />
      <Button title='Images Screen!' onPress={() => navigate('Test')} />
      <Button title='Counter' onPress={() => navigate('Counter')} />
      <Button title='TextInput' onPress={() => navigate('TextInput')} />
      <Button title='BlogPosts' onPress={() => navigate('BlogPosts')} />
      <Button title='RandomColors' onPress={() => navigate('RandomColors')} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Home
