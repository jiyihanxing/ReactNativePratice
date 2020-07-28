import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {HomeScreens} from './CSHome'
import {DetailsScreen} from "./CSDetails"
import {Image} from "react-native";
import {IconBadge,IconWithBadge} from './CSIconBadge'

//创建导航控制器
const StackNavigator = createStackNavigator()
//tab导航
const TabNavigator = createBottomTabNavigator()

function Root() {
    return (
        <NavigationContainer>
            {/*<StackNavigator.Navigator>*/}
            {/*    <StackNavigator.Screen name='Home' component={HomeScreens}/>*/}
            {/*    <StackNavigator.Screen name='Details' component={DetailsScreen}/>*/}
            {/*</StackNavigator.Navigator>*/}
            <TabNavigator.Navigator
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
                    } else if (route.name === 'Details') {
                        icon =
                            focused ?
                            require('./../ios/tabbarIcons/yjy_mine_selected.png') :
                            require('./../ios/tabbarIcons/yjy_mine.png')
                    }
                    //console.log('icon='+icon,size);
                    //return (<Image source={icon} style={{width:size,height:size}}/>)
                    //return (IconBadge({icon:icon,badge:10,size:size}))
                    return (IconWithBadge(icon,badge,size))
                }
            })}
                tabBarOptions={{
                activeTintColor: '#52cc8f',
                inactiveTintColor: 'gray',
            }}>
                <TabNavigator.Screen name='Home' component={HomeScreens}/>
                <TabNavigator.Screen name='Details' component={DetailsScreen}/>
            </TabNavigator.Navigator>
        </NavigationContainer>
    )
}
export default Root
