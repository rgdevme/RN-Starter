import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const ImageDetail = ({ src, text, score }) => (
  <View>
    <Image source={src} />
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.score}>Score: {score}</Text>
  </View>
)

const styles = StyleSheet.create({
  image: {},
  text: {
    fontSize: 30
  },
  score: {
    fontSize: 15
  }
})

export default ImageDetail
