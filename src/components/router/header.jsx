//import liraries
import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {aplicationColors} from '../../theme/colors';
import {height, width} from '../../utils/constants';
import {SearchFavorite, SearchNormal} from 'iconsax-react-native';

// create a component
const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right + 5,
        backgroundColor: aplicationColors.PRIMARY,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 40,
        }}>
        <Image
          style={{
            width: width * 0.4,
            height: width * 0.1,
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <SearchNormal size={30} color={aplicationColors.WHITE} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Header;
