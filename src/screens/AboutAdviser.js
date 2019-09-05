import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as color from '../colors';
import Button from '../components/Button';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//style
import styles from '../styles/AboutAdviser'




export default class AboutAdviser extends Component {

  

    render() {

        const {data} = this.props
        return (

            <View style={styles.AboutAdviser}>


                {/* header header */}

                <View style={styles.menu} >

                    <TouchableOpacity
                        style={styles.icons}
                        onPress={() => Actions.pop()}>
                        <Icon name="arrow-left" size={32} color={color.white} />
                    </TouchableOpacity>

                    <View style={styles.middle} >
                        <Text style={styles.title} >درباره مشاور</Text>
                    </View>


                </View>


                <View style={styles.body} >



                    <View style={styles.up} >
                        <View style={styles.box_1} >








                            <View style={styles.share_love} >
                                <View style={styles.love} >
                                    <TouchableOpacity
                                        onPress={() => alert('alert')}
                                        activeOpacity={.7}
                                    >
                                        <Icon size={28} name="account-heart-outline" color={color.color4} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => alert('alert')}
                                        activeOpacity={.7}
                                        style={styles.share}
                                    >
                                        <Icon size={28} name="share-variant" color={color.color2} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.level} >
                                    <Icon size={18} name="star" color={color.color4} />
                                    <Icon size={18} name="star" color={color.color4} />
                                    <Icon size={18} name="star" color={color.color4} />
                                    <Icon size={18} name="star" color={color.color4} />
                                    <Icon size={18} name="star-outline" color={color.color4} />
                                </View>
                            </View>

                            <View style={styles.image_parent} >
                                <Image style={styles.image} source={data.image} />
                                <Text style={styles.online_light} ></Text>
                            </View>



                            <View style={styles.title_box} >
                                <Text style={styles.advider_title} >
                                    {data.name}
                                </Text>
                                <Text style={styles.code} >
                                    کد : {data.code}
                                </Text>
                                <View style={styles.location} >

                                    <Text style={styles.location_text} >
                                        {data.city}
                                    </Text>
                                    <Icon size={12} name="map-marker" color={color.color2} />

                                </View>
                            </View>
                        </View>




                        <View style={styles.items} >

                            <View style={styles.item_parents} >
                                <View style={styles.item} >
                                    <TouchableOpacity
                                        onPress={() => alert('alert')}
                                        activeOpacity={.7}
                                        style={styles.item_circle} >
                                        <FontAwesome5 size={24} name="calendar" color={color.color2} />
                                    </TouchableOpacity>
                                    <Text style={styles.item_text} >
                                        ساعت کاری
                                    </Text>

                                </View>
                                <View style={styles.item} >
                                    <TouchableOpacity
                                        onPress={() => alert('alert')}
                                        activeOpacity={.7}
                                        style={styles.item_circle} >
                                        <Icon size={24} name="star-outline" color={color.color2} />
                                    </TouchableOpacity>
                                    <Text style={styles.item_text} >
                                        امتیاز و نظرات
                                    </Text>

                                </View>
                                <View style={styles.item} >
                                    <TouchableOpacity
                                        onPress={() => alert('alert')}
                                        activeOpacity={.7}
                                        style={styles.item_circle} >
                                        <FontAwesome5 size={24} name="smile" color={color.color2} />
                                    </TouchableOpacity>
                                    <Text style={styles.item_text} >
                                        درباره من
                                    </Text>

                                </View>

                            </View>

                            <View style={styles.item_parents} >

                                <View style={styles.item} >
                                    <TouchableOpacity
                                        onPress={() => alert('alert')}
                                        activeOpacity={.7}
                                        style={[styles.item_circle, { borderColor: color.color4 }]} >
                                        <FontAwesome5 size={24} name="calendar-check" color={color.color4} />
                                    </TouchableOpacity>
                                    <Text style={styles.item_text} >
                                        رزرو مشاوره تلفنی
                                    </Text>

                                </View>
                                <View style={styles.item} >
                                    <TouchableOpacity
                                        onPress={() => alert('alert')}
                                        activeOpacity={.7}
                                        style={[styles.item_circle, { borderColor: color.color3 }]} >
                                        <FontAwesome5 size={24} name="envelope" color={color.color3} />
                                    </TouchableOpacity>
                                    <Text style={styles.item_text} >
                                        ارسال پیام
                                    </Text>

                                </View>
                                <View style={styles.item} >
                                    <TouchableOpacity
                                        onPress={() => alert('alert')}
                                        activeOpacity={.7}
                                        style={styles.item_circle} >
                                        <FontAwesome5 size={24} name="comment-alt" color={color.color2} />
                                    </TouchableOpacity>
                                    <Text style={styles.item_text} >
                                        پاسخ ها
                                    </Text>

                                </View>
                            </View>


                        </View>


                    </View>





                    <View style={styles.button_box} >
                        <Text style={styles.price} >
                            {data.price}
                                    </Text>

                        <Button
                            width={Dimensions.get('window').width - 40}
                            paddingVertical={10}
                            paddingHorizontal={10}
                            borderRadius={5}
                            backgroundColor={color.color6}
                            marginBottom={0}
                            buttonPress={() => alert('call')}
                            fontSize={15}
                            color={color.white}
                            buttonTitle="تماس"
                            borderWidth={1}
                            borderColor={color.color3}
                            elevation={1}

                        />

                    </View>








                </View>






            </View>




        );
    }
}


