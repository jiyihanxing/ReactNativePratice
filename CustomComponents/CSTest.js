import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    ActionSheetIOS,
    TouchableOpacity,
    Alert
} from 'react-native'

import Device from './Device'
import {sendGetRequest,sendPostRequest} from './CSFetch'

class CSTest extends React.Component {
    constructor() {
        super();
        this.state = {
            width: Device.width,
            height: Device.height,
            scale: Device.scale,
            os: Device.os,
            myName: 'start',
        }
    };

    updateMyName(name) {
        this.setState({
            myName: name
        })
    }

    //点击事件
    _click() {
        //alert('哈哈哈')
        sendGetRequest('',null).then(function (result) {
            console.log('status=',result.status + '\n' + 'responseJson=',JSON.stringify(result.responseJson) + '\n' + 'error=',result.error)
        })
        sendPostRequest('/api/dataQuery/subject', {
            queryParam: '1,1,,,sortNum,asc,0,20',
            subjectAlias: 'goods_speciality_list'
        }).then(function (result) {
            console.log('status=',result.status + '\n' + 'responseJson=',JSON.stringify(result.responseJson) + '\n' + 'error=',result.error)
        })
        return

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['取消', '删除'],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0,},
            (buttonIndex) => {
                if (buttonIndex === 1) {
                    console.log('123')
                    alert('删除')
                }
            }
        )

        Alert.alert(
            "Update available",
            "Keep your app up to date to enjoy the latest features",
            [
                {
                    text: "Cancel",
                    onPress: ()=>{this.setState({myName:'hanxing'})},
                    style: "cancel"
                },
                {
                    text: "Install",
                    onPress: ()=> {
                        console.log("Install Pressed")
                    }
                }]
        )
    };

    render() {
        const {width, height, scale, os} = this.state
        return (
            <ScrollView style={{showsVerticalScrollIndicator: false}}>
                <Text style={styles.textStyle}>当前设备宽度：{width}</Text>
                <Text style={styles.textStyle}>当前设备高度：{height}</Text>
                <Text style={styles.textStyle}>当前设备分辨率：{scale}</Text>
                <Text style={styles.textStyle}>myName：{this.state.myName}</Text>
                <TouchableOpacity
                    style={{
                        width: Device.width-20,
                        height: 44,
                        marginLeft: 10,
                        marginTop: 20,
                        backgroundColor: '#52cc62',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    activeOpacity={0.5}
                    onPress={()=>{this._click()}}
                    //onPress={()=>{this.updateMyName('哈哈')}}
                >
                    <Text style={{width: Device.width-40, height: 30, textAlign: 'center',backgroundColor: 'orange',fontSize: 25,lineHeight: 30,textAlignVertical: 'center'}}>当前设备平台：{os}</Text>

                </TouchableOpacity>
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
        width: Device.width,
        height: Device.height - 74,
    },

    textStyle: {
        backgroundColor: 'orange',
        color: 'purple',
        fontSize: 30,
        width: Device.width-20,
        height: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60,//设置文字垂直居中对齐
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
})

export default CSTest