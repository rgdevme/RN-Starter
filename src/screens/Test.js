import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ImageDetail from '../components/imagedetail'

const Test = () => {
  const images = [
    {
      src: require('../../assets/images/forest.jpg'),
      text: 'Forest',
      score: 4
    },
    { src: require('../../assets/images/beach.jpg'), text: 'Beach', score: 3 },
    {
      src: require('../../assets/images/mountain.jpg'),
      text: 'Mountain',
      score: 5
    }
  ]
  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={image => image.text.toLowerCase()}
        renderItem={({ item }) => (
          <ImageDetail src={item.src} score={item.score} text={item.text} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default Test
