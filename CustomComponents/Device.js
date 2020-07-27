import React, { Component } from 'react';

import {
    Dimensions,
    Platform,
} from 'react-native'

const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height
const DeviceScale = Dimensions.get('window').scale
const DeviceOS = Platform.OS

export default class Device extends Component {
    static width = DeviceWidth
    static height = DeviceHeight
    static scale = DeviceScale
    static os = DeviceOS
}

