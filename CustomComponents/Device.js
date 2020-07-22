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
    static width() {
        return DeviceWidth
    }

    static height() {
        return DeviceHeight
    }

    static scale() {
        return DeviceScale
    }

    static os() {
        return DeviceOS
    }
}
