import React from 'react'
import { Text, TouchableOpacity, Dimensions, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


//components
import Button from './Button';


//colors
import * as color from '../colors';


export const AdviserItem = (props) => (
    <TouchableOpacity style={styles.adviser_item}
        onPress={props.press}
        activeOpacity={.7}>



        <View style={styles.left} >
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >

                <Text style={styles.city} >
                    {props.city}
                </Text>
                <Icon size={12} name="map-marker" color={color.color2} />

            </View>
            <Text style={styles.price} >
                {props.price}
            </Text>
            <Button
                paddingVertical={2}
                paddingHorizontal={40}
                borderRadius={5}
                backgroundColor={color.color6}
                marginBottom={0}
                buttonPress={props.buttonPress}
                fontSize={10}
                color={color.white}
                buttonTitle="تماس"
                borderWidth={1}
                borderColor={color.color3}
                elevation={1}
            />
        </View>



        <View style={styles.right} >


            <View style={styles.right_left} >
                <Text style={styles.adviser_name} >
                    {props.adviserName}
                </Text>
                <Text style={styles.adviser_code} >
                    کد :
                    {props.adviserCode}
                </Text>

                <View style={styles.adviser_level} >
                    <Icon size={15} name="star" color={color.color4} />
                    <Icon size={15} name="star" color={color.color4} />
                    <Icon size={15} name="star" color={color.color4} />
                    <Icon size={15} name="star" color={color.color4} />
                    <Icon size={15} name="star-outline" color={color.color4} />
                </View>

            </View>
            <View style={styles.right_right} >
                <View style={[styles.image_parent,{borderColor: props.orange ? color.color4 : 'transparent',}]} >

                    <View style={styles.image_box} >
                        <Image style={styles.image} source={props.image ? props.image : require('./../../Assets/images/user.png')} />
                    </View>
                    <Text style={styles.online_light} ></Text>
                </View>
                <View style={styles.image_title} >


                    <Icon size={10} name="chevron-left" color={color.color2} />
                    <Text style={styles.image_text} >
                        درباره مشاور
                    </Text>

                </View>



            </View>

        </View>

    </TouchableOpacity>
)




const styles = StyleSheet.create({
    adviser_item: {
        width: Dimensions.get('window').width - 20,
        height: 90,
        elevation: 4,
        marginTop: 10,
        backgroundColor: color.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10
    },
    left: {
        alignItems: 'center',
        height: 70,
        justifyContent: 'space-between',
    },
    city: {
        fontFamily: 'IS',
        color: color.font,
        fontSize: 10,
        marginRight: 5,
    },
    price: {
        fontFamily: 'ISF',
        color: color.font,
        fontSize: 8,

    },
    right: {
        flexDirection: 'row',
        height: 70

    },
    right_left: {
        marginRight: 20,
        height: 70,
        justifyContent: 'space-between'
    },
    adviser_name: {
        fontFamily: 'ISBold',
        color: color.balck,
        fontSize: 14,
        textAlign: 'right'
    },
    adviser_code: {
        fontFamily: 'ISF',
        color: color.balck,
        fontSize: 10,
        textAlign: 'right'

    },
    adviser_level: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    right_right: {
        alignItems: 'center',
        height: 70,
        justifyContent: 'space-between',
    },
    image_parent: {
        width: 58,
        height: 58,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:4
    },
    image_box: {
        width: 46,
        height: 46,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: color.color3,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        width: 45,
        height: 45,
        backgroundColor:color.color3
    },
    online_light: {
        width: 16,
        height: 16,
        backgroundColor: color.color5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: color.white,
        bottom: 2,
        right: 2,
        position: 'absolute'

    },
    image_title:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    image_text:{
        fontFamily: 'ISMedium',
        color: color.color2,
        fontSize: 9,
    }



})