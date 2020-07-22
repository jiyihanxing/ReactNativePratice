import React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions,
    Platform,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native'

let DeviceWidth = Dimensions.get('window').width
let DeviceHeight = Dimensions.get('window').height
let DeviceScale = Dimensions.get('window').scale
let CurrentPlatform = Platform.OS

export default class CSText extends Component {
    constructor() {
        super();
        this.state = {
            width: DeviceWidth,
            height: DeviceHeight,
            scale: DeviceScale,
            os: CurrentPlatform
        }
    };

    render() {
        let tips = '啦啦啦，德玛西亚！！！'
        const {width, height, scale, os} = this.state
        return (
            <ScrollView style={{showsVerticalScrollIndicator: false}}>
                <Text style={styles.textStyle}>当前设备宽度：{width}</Text>
                <Text style={styles.textStyle}>当前设备高度：{height}</Text>
                <Text style={styles.textStyle}>当前设备分辨率：{scale}</Text>
                <Text style={styles.textStyle}>当前设备平台：{os}</Text>
                <Text style={styles.textStyle}>{tips}</Text>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width: DeviceWidth-20,height: 100,marginTop: 10,marginLeft: 10,borderRadius: 8}}></Image>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width: DeviceWidth-40,height: 150,marginTop: 10,marginLeft: 20,borderRadius: 16}}></Image>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width: DeviceWidth-80,height: 250,marginTop: 10,marginLeft: 40,borderRadius: 20}}></Image>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainViewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',//纵向对齐方式
        alignItems: 'center',//横向对齐方式
        backgroundColor: 'green',
        width: DeviceWidth,
        height: DeviceHeight - 74,
    },

    textStyle: {
        backgroundColor: 'orange',
        color: 'purple',
        fontSize: 30,
        width: DeviceWidth-20,
        height: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60,//设置文字垂直居中对齐
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10
    }
});