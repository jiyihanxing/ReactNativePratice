import React from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity, Button
} from 'react-native'
import Device from './Device'

export function DetailsScreen({navigation,route}) {
    //配置导航条
    navigation.setOptions({
        title: '详情',
        headerStyle:{
            backgroundColor: '#52cc8f',//设置导航条背景色
        },
        headerTintColor: '#fff',//统一设置标题和返回按钮颜色
        //设置title样式
        headerTitleStyle:{
            color: 'red',//设置标题颜色
            fontSize: 30,
            fontWeight: 'bold'
        },
        //设置返回按钮标题
        headerBackTitle: ' ',
        headerTruncatedBackTitle: '8888',
        headerBackTitleStyle: {
            color:'blue'
        },
        //设置左边按钮
        // headerLeft: ()=> (
        //     <Button
        //         onPress={() => navigation.goBack()}
        //         title= '< 返回'
        //         color="#fff"
        //     />
        // ),
        //设置右边按钮
        headerRight: ()=> (
            <Button
                onPress={() => alert('设置')}
                title= '设置'
                color="#fff"
            />
        )
    })

    return (
        <ScrollView style={{showsVerticalScrollIndicator: false}}>
            <Button title={'更改标题'} style={{color:'red',fontWeight: 'bold',fontSize: 30}} onPress={()=>updateTitle(navigation)}/>
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

//pop返回/返回指定页面并回传参数
function back(navigation,params) {
    //输出上个页面传参
    console.log(JSON.stringify(params.real))
    //修改上个页面的传参
    navigation.setParams(
        params.real = '必须的！！！'
    )
    console.log(JSON.stringify(params.real))
    //pop返回上级页面
    //this.props.navigation.goBack()
    //返回指定页面并回传参数
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