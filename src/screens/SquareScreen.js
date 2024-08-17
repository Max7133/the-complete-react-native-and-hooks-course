import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from './ColorCounter';

// Constant Value for inc and dec (Config Option)
const COLOR_INCREMENT = 15;

// 1 arg - state === { red: 0, green: 0, blue: 0 }
// 2nd Arg (action) === Obj that describes how it needs to change/update the State Obj === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      // Validation
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state // must return existing State Obj, otherwise it will set itself as 'undefined'
        : // take the current amount whatever the 'red' is and add in hovewer much I specified on that 'action' Obj
          { ...state, red: state.red + action.amount }; // copy paste all the Values out of 'state', adding them to this New Obj and overwriting the New Obj (NO CHANGES MADE TO THE ORIGINAL 'state' OBJ)
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
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
          () => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }) // passed an Obj (action Obj from 'reducer' with 'colorToChange' and 'amount')
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
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
