import React, { useState, useReducer } from 'react'
import { StyleSheet, Button, View, Text, FlatList } from 'react-native'

const RandomColors = () => {
  const colorReducer = (state, action) => {
    const { type, payload } = action
    const increment = (payload == 'addition' ? 1 : -1) * 15

    let updatedColor =
      state[type] + increment >= 255
        ? 255
        : state[type] + increment <= 0
        ? 0
        : state[type] + increment

    console.log(action)
    return { ...state, [type]: updatedColor }
  }

  const [color, setColor] = useReducer(colorReducer, {
    red: 128,
    green: 128,
    blue: 128
  })

  const [colors, setColors] = useState([])

  return (
    <View
      style={{
        paddingHorizontal: 8,
        paddingVertical: 8
      }}
    >
      <ColorAdjuster color='red' onPress={setColor} />
      <ColorAdjuster color='green' onPress={setColor} />
      <ColorAdjuster color='blue' onPress={setColor} />
      <View
        style={{
          marginVertical: 8,
          borderRadius: 2,
          height: 200,
          flexGrow: 1,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {`rgb(${color.red}, ${color.green}, ${color.blue})`}
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={color => color}
        data={colors}
        renderItem={({ item: color }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: color }} />
          )
        }}
      />
      <Button
        title='Add a Color'
        onPress={() => setColors([...colors, randomRGB()])}
      />
      <Button title='Empty' onPress={() => setColors([])} />
    </View>
  )
}

const randomRGB = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

const ColorAdjuster = ({ color, onPress }) => (
  <View>
    <Text style={{ paddingTop: 8, paddingBottom: 4 }}>
      {[color[0].toUpperCase(), color.slice(1)].join('')}
    </Text>
    <View
      style={{
        flexDirection: 'row'
      }}
    >
      <View style={{ flex: 1 }}>
        <Button
          title={`More ${color}`}
          onPress={() => onPress({ type: color, payload: 'addition' })}
        />
      </View>
      <View style={{ width: 8 }} />
      <View style={{ flex: 1 }}>
        <Button
          title={`Less ${color}`}
          onPress={() => onPress({ type: color, payload: 'subtraction' })}
        />
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({})

export default RandomColors
