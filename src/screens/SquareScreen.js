import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from './ColorCounter';

// Constant Value for inc and dec (Config Option)
const COLOR_INCREMENT = 15;

// 1 arg - state === { red: 0, green: 0, blue: 0 }
// 2nd Arg (action) === Obj that describes how it needs to change/update the State Obj === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      // Validation
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state // must return existing State Obj, otherwise it will set itself as 'undefined'
        : // take the current amount whatever the 'red' is and add in hovewer much I specified on that 'action' Obj
          { ...state, red: state.red + action.payload }; // copy paste all the Values out of 'state', adding them to this New Obj and overwriting the New Obj (NO CHANGES MADE TO THE ORIGINAL 'state' OBJ)
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 }); // reducer func and initial value for the 'state' Obj
  const { red, green, blue } = state; // pulled out 'red', 'green' and 'blue' from State Obj

  return (
    <View>
      <ColorCounter
        onIncrease={
          () => dispatch({ type: 'change_red', payload: COLOR_INCREMENT }) // passed an Obj (action Obj from 'reducer' with 'type' and 'payload')
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
