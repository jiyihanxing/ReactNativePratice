import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home} from './CSHome'
import {IconWithBadge} from '../CustomComponents/CSIconBadge'
import {DetailsScreen} from "./CSDetails";
//创建导航控制器
const Stack = createStackNavigator()

function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                >
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name= 'Details' component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Root
