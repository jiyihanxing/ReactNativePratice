
import React, {Component, useEffect, useState} from 'react'
import {Text, View} from "react-native";
import CSStyle from "../Common/CSStyle";
import {DetailsScreen} from "./CSDetails";
import {sendPostRequest} from './../Common/CSFetch'

// export function FoodScreen({navigation,route}){
//     console.log('route.name=',route.name)
//     return (
//         <Text>哈哈哈</Text>
//     )
// }

export default class FoodScreen extends React.Component {
    constructor() {
        super();
        this.state={
            dataArray: []
        }
    }

    render() {
        return (
            <Text>哈哈哈666</Text>
        )
    }
    componentDidMount() {
        sendPostRequest('/api/dataQuery/subject', {
            queryParam: '1,1,,,sortNum,asc,0,20',
            subjectAlias: 'goods_speciality_list'
        }).then((result)=>{
            //console.log('status=',result.status + '\n' + 'responseJson=',JSON.stringify(result.responseJson) + '\n' + 'error=',result.error)
            let resJson = result.responseJson
            if (resJson.code === '111') {
                this.setState({
                    dataArray: resJson.res
                })
                console.log('请求成功！！！',this.state.dataArray)
            } else {
                console.log('请求失败！！！')
            }
        })
    }
}
