import React, {useEffect} from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Device from './Device'
import {FoodListScreen} from "./CSFoodList";
import {IconWithBadge} from "./CSIconBadge";
//tab导航
const Tab = createBottomTabNavigator()

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name='Home' component={HomeScreen}/>
//                 <Stack.Screen name='Details' component={DetailsScreen}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }
// export default App

//首页tabbar导航布局
export function Home() {
    return (
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({focused, color, size})=> {
                    let icon = undefined
                    let badge = 0
                    if (route.name === 'Home') {
                        icon =
                            focused ?
                                require('./../ios/tabbarIcons/yjy_home_selected.png') :
                                require('./../ios/tabbarIcons/yjy_home.png')
                        badge = 8
                    } else if (route.name === 'Food') {
                        icon =
                            focused ?
                                require('./../ios/tabbarIcons/yjy_mine_selected.png') :
                                require('./../ios/tabbarIcons/yjy_mine.png')
                    }
                    //console.log('icon='+icon,size);
                    //返回自定义tabbarItem组件（可自由定制）
                    //return <Image source={icon} style={{width:size,height:size}}/>
                    //return IconBadge({icon:icon,badge:10,size:size})
                    return IconWithBadge(icon,badge,size)
                }
            })}
            tabBarOptions={{
                activeTintColor: '#52cc8f',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Food' component={FoodListScreen}/>
        </Tab.Navigator>
    )
}
//首页布局
function HomeScreen ({navigation,route}) {
    //监测下级页面参数回传
    useEffect(()=>{
        if (route.params?.real1) {
            console.log('我是下级页面回传参数值：' + route.params?.real1)
        } else {
            console.log('我是下级页面回传参数值：undefined')
        }

        if (route.params?.name) {
            console.log('我的名字：' + route.params.name);
        } else  {
            console.log('我的名字：undefined');
        }
    })

    return (
        <ScrollView style={{showsVerticalScrollIndicator: false}}>
            <Text style={styles.textStyle}>当前设备宽度：{Device.width}px</Text>
            <Text style={styles.textStyle}>当前设备高度：{Device.height}px</Text>
            <Text style={styles.textStyle}>当前设备分辨率：{Device.scale}倍</Text>
            <Text style={styles.textStyle}>当前系统：{Device.os}</Text>
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
                //onPress={click(navigation)}//不添加"=>"介头函数会直接响应click方法一次
                onPress={()=>click(navigation)}
            >
                <Text style={{width: Device.width-40, height: 30, textAlign: 'center',backgroundColor: 'orange',fontSize: 25,lineHeight: 30,textAlignVertical: 'center'}}>Push</Text>

            </TouchableOpacity>
        </ScrollView>
    )
}
//push
function click(navigation) {
    navigation.push('Details',{real:'I am a wealthy！！！'})
    //navigation.navigate('Details',{real:'I am a wealthy！！！'})
}
//首页布局样式
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