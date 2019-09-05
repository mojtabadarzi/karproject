import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

import * as color from '../colors'


const Button = (props) => (
    <TouchableOpacity style={{
        width: props.width,
        paddingVertical: props.paddingVertical,
        paddingHorizontal: props.paddingHorizontal,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        marginBottom: props.marginBottom,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        borderWidth:props.borderWidth,
        borderColor:props.borderColor,
        elevation:props.elevation
    }} activeOpacity={.5}
        onPress={props.buttonPress}
    >
        <Text
            style={{
                fontSize: props.fontSize,
                fontFamily: 'ISBold',
                color: props.color,
                textAlign: 'center',
            }}
        >{props.buttonTitle}</Text>
       
    </TouchableOpacity>
)


export default Button;

{/* <GradientButton 
    width="90%"
    press={this._press}
    activeOpacity={.6}
    height={50}
    borderRadius={50}
    textColor="#333"
    size={16}
    title="عنوان"
    marginTop={20}
    marginBottom={20}
/> */}