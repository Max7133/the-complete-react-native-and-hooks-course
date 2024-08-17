import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }
  // ...state - take all the different current values out of 'state' and throw them into this new object: { ...state, count: state.count + action.payload }; and overwrite it
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }; // take whatever the current 'count' is and ADD 'payload' to it
    case 'decrement':
      return { ...state, count: state.count - action.payload }; // take whatever the current 'count' is and SUBTRACT 'payload' from it
    default:
      return state;
  }
};

const CounterScreen = () => {
  // 2nd Arg of useReducer() - { count:0 } GENERALLY NEEDS TO BE STORED IN AN OBJECT! (if I'm reaching useReducer(), means there are multiple different Properties that I would need to keep track of)
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement', payload: 1 })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
