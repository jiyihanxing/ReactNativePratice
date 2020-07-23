import React, {Component, useEffect, useState} from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Device from './Device'

//点击事件
function click(navigation) {
    navigation.navigate('DetailsScreen',{real:'I am a wealthy！！！'})
}

function HomeScreen({navigation,route}) {
    //监测下级页面参数回传
    useEffect(()=>{
        if (route.params?.real1) {
            console.log('我是下级页面回传参数值：' + route.params?.real1)
        } else {
            console.log('我是下级页面回传参数值：undefined')
        }
    })

    return (
        <ScrollView style={{showsVerticalScrollIndicator: false}}>
            <Text style={styles.textStyle}>当前设备宽度：{Device.width()}</Text>
            <Text style={styles.textStyle}>当前设备高度：{Device.height()}</Text>
            <Text style={styles.textStyle}>当前设备分辨率：{Device.scale()}</Text>
            <Text style={styles.textStyle}>当前系统：{Device.os()}</Text>
            <TouchableOpacity
                style={{
                    width: Device.width()-20,
                    height: 44,
                    marginLeft: 10,
                    marginTop: 20,
                    backgroundColor: '#52cc62',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                activeOpacity={0.5}
                //onPress={click(navigation)}//不添加"=>"介头函数会直接响应click方法一次
                onPress={()=>click(navigation)}
            >
                <Text style={{width: Device.width()-40, height: 30, textAlign: 'center',backgroundColor: 'orange',fontSize: 25,lineHeight: 30,textAlignVertical: 'center'}}>Push</Text>

            </TouchableOpacity>
        </ScrollView>
    )

}

//点击事件
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
    navigation.navigate('HomeScreen',{
        real1: 'Common on baby!!!'
    })
}

function DetailsScreen({navigation,route}) {
    return (
        <ScrollView style={{showsVerticalScrollIndicator: false}}>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>back(navigation,route.params)}
            >
                <Text style={styles.textStyle}> 返 回 </Text>
            </TouchableOpacity>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    mainViewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',//纵向对齐方式
        alignItems: 'center',//横向对齐方式
        backgroundColor: 'green',
        width: Device.width(),
        height: Device.height() - 74,
    },

    textStyle: {
        backgroundColor: 'orange',
        color: 'purple',
        fontSize: 30,
        width: Device.width()-20,
        height: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60,//设置文字垂直居中对齐
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
})

//创建导航控制器
const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen
                    name='DetailsScreen'
                    component={DetailsScreen}
                    //设置导航title
                    options={{
                        title:'DetailsScreen11111',

                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App