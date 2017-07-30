import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import images from '../config/images/'

export default class Bananas extends Component {
  render() {
    return (
      <Image source={images} style={{width: 193, height: 110}}/>
    );
  }
}
