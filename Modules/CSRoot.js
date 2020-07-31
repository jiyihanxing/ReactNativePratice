import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './CSHome'
import {IconWithBadge} from '../CustomComponents/CSIconBadge'
import {DetailsScreen} from "./CSDetails";
import CSStyle from "../Common/CSStyle";
import {FoodScreen} from "./CSFoodList";
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
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
                    //控制导航条显隐
                    //headerShown: false
                }}
            >
                <Stack.Screen name='Home' component={Home} options={({ route }) => ({
                    //方式1-----更改当前导航条标题
                    //avigationOptions: updateHeaderTitleStyle(route),
                    title: updateHeaderTitle(route),
                    headerTitleStyle: updateHeaderTitleStyle(route)
                })}
                />
                <Stack.Screen name='Details' component={DetailsScreen} options={{title: '详情'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

//设置导航条标题
function updateHeaderTitle(route) {
    let defaultRouteName = getFocusedRouteNameFromRoute(route)
    console.log('defaultRouteName=',defaultRouteName)
    const routeName = defaultRouteName ?? 'Home'
    switch (routeName) {
        case 'Home':
            return '首页666666'
        case 'Food':
            return '美食888888'
    }
}

function updateHeaderTitleStyle(route) {
    let defaultRouteName = getFocusedRouteNameFromRoute(route)
    console.log('defaultRouteName=',defaultRouteName)
    const routeName = defaultRouteName ?? 'Home'
    switch (routeName) {
        case 'Home':
            return {
                //设置标题颜色
                color: CSStyle.titleColor,
                fontSize: 18,
                fontWeight: 'bold'
            }
        case 'Food':
            return {
                //设置标题颜色
                color: CSStyle.mainColor,
                fontSize: 30,
                fontWeight: 'bold'
            }
    }
}
export default Root
