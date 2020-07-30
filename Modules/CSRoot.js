import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './CSHome'
import {IconWithBadge} from '../CustomComponents/CSIconBadge'
import {DetailsScreen} from "./CSDetails";
import CSStyle from "../Common/CSStyle";
import {FoodScreen} from "./CSFoodList";
//创建导航控制器
const Stack = createStackNavigator()

function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                //统一设置导航条样式
                screenOptions={{
                    headerStyle:{
                        backgroundColor: 'white'
                    },
                    //统一设置标题和返回按钮颜色
                    headerTintColor: 'white',
                    //设置title样式
                    headerTitleStyle:{
                        //设置标题颜色
                        color: CSStyle.titleColor,
                        fontSize: 18,
                        fontWeight: 'bold'
                    },
                    //设置返回按钮标题
                    headerBackTitle: ' ',
                }}
            >
                <Stack.Screen name='Home' component={Home} options={{title:'首页666'}}/>
                <Stack.Screen name='Details' component={DetailsScreen} options={{title: '详情'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Root
