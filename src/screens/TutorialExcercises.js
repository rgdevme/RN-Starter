import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const TutorialExcercises = () => {
  const name = 'Rafael'
  const friends = [
    { name: 'Friend 1', age: 30 },
    { name: 'Friend 2', age: 20 },
    { name: 'Friend 3', age: 35 },
    { name: 'Friend 4', age: 53 },
    { name: 'Friend 5', age: 25 },
    { name: 'Friend 6', age: 15 },
    { name: 'Friend 7', age: 40 }
  ]
  return (
    <View style={styles.view}>
      <Text style={styles.heading}>Getting started with React Native!</Text>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.subheading}>Friends!</Text>
      <FlatList
        data={friends}
        showsVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name.toLowerCase().replace(/ /g, '-')}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.name} - {item.age} y/o
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  heading: {
    fontSize: 45
  },
  subheading: {
    fontSize: 30
  },
  text: {
    fontSize: 20
  },
  listItem: {
    marginVertical: 50
  }
})

export default TutorialExcercises
