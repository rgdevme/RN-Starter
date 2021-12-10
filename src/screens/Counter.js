import React, { useReducer } from 'react'
import { Text, StyleSheet, Button, View } from 'react-native'

const Counter = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREASE':
        return {
          ...state,
          prev: state.current,
          current: state.current + 1
        }
      case 'DECREASE':
        return {
          ...state,
          prev: state.current,
          current: state.current - 1
        }
      case 'RESET':
        return {
          ...state,
          prev: 0,
          current: 0
        }

      default:
        break
    }
  }

  const [counter, dispatch] = useReducer(counterReducer, {
    current: 0,
    prev: 0
  })

  return (
    <View
      style={{
        padding: 8,
        alignItems: 'center'
      }}
    >
      <View
        style={{
          flexGrow: 1,
          flexDirection: 'row'
        }}
      >
        <View style={{ flex: 1 }}>
          <Button
            title='Increase'
            onPress={() => dispatch({ type: 'INCREASE' })}
          />
        </View>
        <View style={{ width: 8 }} />
        <View style={{ flex: 1 }}>
          <Button title='Reset' onPress={() => dispatch({ type: 'RESET' })} />
        </View>
        <View style={{ width: 8 }} />
        <View style={{ flex: 1 }}>
          <Button
            title='Decrease'
            onPress={() => dispatch({ type: 'DECREASE' })}
          />
        </View>
      </View>
      <Text
        style={{
          padding: 8,
        }}
      >
        Current Count:
      </Text>
      <Text
        style={{
          padding: 8,
          fontSize: 30,
          fontWeight: 'bold'
        }}
      >
        {counter.current}
      </Text>
      <Text
        style={{
          padding: 8,
        }}
      >
        Previous Count:
      </Text>
      <Text
        style={{
          padding: 8,
          fontSize: 30,
          fontWeight: 'bold'
        }}
      >
        {counter.prev}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Counter
