import React, {Component, useEffect, useState} from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity, Button
} from 'react-native'
import Device from './Device'

export function DetailsScreen({navigation,route}) {
    return (
        <ScrollView style={{showsVerticalScrollIndicator: false}}>
            <Button title={'更改标题'} style={{titleTextColor:'red',fontWeight: 'bold'}} onPress={()=>updateTitle(navigation)}/>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>back(navigation,route.params)}
            >
                <Text style={styles.textStyle}> 返 回 </Text>
            </TouchableOpacity>
        </ScrollView>
    )

}

//修改标题
function updateTitle(navigation) {
    navigation.setOptions({
        title: '寄意寒星'
    })
}

//返回
function back(navigation,params) {
    //输出上个页面传参
    console.log(JSON.stringify(params.real))
    //修改上个页面的传参
    navigation.setParams(
        params.real = '必须的！！！'
    )
    console.log(JSON.stringify(params.real))
    //返回上级页面
    //this.props.navigation.goBack()
    //返回指定页面
    navigation.navigate('Home',{
        real1: 'Common on baby!!!',
        name: '寄意寒星666'
    })
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