//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FAVORITE, HOME} from '../../utils/routes';
import {Heart, Home} from 'iconsax-react-native';

// create a component
const TabIcon = ({size, color, name, focused}) => {
  if (name == HOME) {
    return <Home size={size} color={color} />;
  } else if (name == FAVORITE) {
    return <Heart size={size} color={color} />;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default TabIcon;
