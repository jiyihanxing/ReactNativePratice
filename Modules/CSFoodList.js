
import React, {Component, useEffect, useState} from 'react'
import {Text, View} from "react-native";
import CSStyle from "../Common/CSStyle";
import {createStackNavigator} from "@react-navigation/stack";
import {DetailsScreen} from "./CSDetails";
//创建栈导航
const Stack = createStackNavigator()

// export function Food() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='Food' component={FoodScreen}/>
//             <Stack.Screen name='Details' component={DetailsScreen} options={{title: '美食666->详情'}}/>
//         </Stack.Navigator>
//     )
// }

export function FoodScreen(){
    return (
        <Text>哈哈哈</Text>
    )
}