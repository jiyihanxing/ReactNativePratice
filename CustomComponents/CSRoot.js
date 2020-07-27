import React, {Component, useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {HomeScreen} from './CSHome'
import {DetailsScreen} from "./CSDetails"

//创建导航控制器
const StackNavigator = createStackNavigator()

function  Root() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name='Home' component={HomeScreen}/>
                <StackNavigator.Screen name='Details' component={DetailsScreen}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}
export default Root