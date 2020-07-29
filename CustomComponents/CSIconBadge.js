import React from "react";
import {Image, View, Text} from "react-native"
export function IconWithBadge(icon, badge, size) {

    return (
        //<Image source={require('./../ios/tabbarIcons/yjy_home_selected.png')} style={{width:size,height:size}}/>
        <View style={{width:24,height:24,margin:2}}>
            <Image source={icon} style={{width:size,height:size}}/>
            {badge>0 &&
            (<View style={{position:'absolute',
                backgroundColor:'red',
                borderRadius:8,
                width:16,
                height:16,
                right:-10,
                top:-3,
                justifyContent:'center',
                alignment:'center'}} >
                <Text style={{color:'white',fontSize:12,fontWeight:'bold',textAlign:'center'}}>
                    {badge}
                </Text>
            </View>)
            }
        </View>
    )

}

export function IconBadge(props) {
    return IconWithBadge(props.icon, props.badge, props.size)
}

