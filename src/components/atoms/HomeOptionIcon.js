import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {widthToDp} from '../../styles/responsive';

const HomeOptionIcon = ({imgSrc}) => {
  return <Image style={styles.image} source={imgSrc} />;
};

const styles = StyleSheet.create({
  image: {
    width: widthToDp('15%'),
    height: widthToDp('15%'),
  },
});

export default HomeOptionIcon;
