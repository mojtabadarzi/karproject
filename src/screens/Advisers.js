import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Modal
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


//components 
import Button from '../components/Button';
import { AdviserItem } from '../components/AdviserItem';

//style
import styles from '../styles/Advisers'
import * as color from '../colors'




export default class Advisers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterModal: false,
            value: 0,
            showOnlineAdviser: false,


            provinceModal: false,
            province: '',
            provinceNumber: 100,
            provinceWidth: '100%',
            cityModal: false,
            city: '',
            cityWidth: 0,

            provinces: ['مازندران', 'تهران', 'گیلان'],
            cities: [
                [
                    { city: 'آمل' },
                    { city: 'بابل' },
                    { city: 'ساری' },
                ],
                [
                    { city: 'دماوند' },
                    { city: 'پردیس' },
                    { city: 'بومهن' }
                ],
                [
                    { city: 'فومن' },
                    { city: 'رشت' },
                    { city: 'انزلی' }
                ],
            ],


            activeColor: color.color4,
            inactiveColor: '#555',
            tab: [false, false, false],


            advisers: [
                { name: 'کمال رمضانی', price: '10,000 تومان / دقیقه', city: 'تهران', code: '11228991', orange: true, image: require('./../../Assets/images/jason.webp') },
                { name: 'امید یزدانی', price: '10,000 تومان / دقیقه', city: 'اراک', code: '12333111', orange: false, image: require('./../../Assets/images/user.png') },
                { name: 'محمد بابایی', price: '10,000 تومان / دقیقه', city: 'آمل', code: '44431111', orange: false, image: require('./../../Assets/images/ken.jpg') },
                { name: 'نازنین مقیمی', price: '10,000 تومان / دقیقه', city: 'شیراز', code: '611912211', orange: true, image: require('./../../Assets/images/natalie.jpg') },
            ]
        }
    }


    _aboutAdviser = (data) => {
        Actions.AboutAdviser({data:data})
    }


    //select province and city
    _selectProvince = async (method, methodModal, name, i) => {
        await this.setState({
            [method]: name,
            [methodModal]: false,
            provinceNumber: i,
            city: '',
            provinceWidth: '48%',
            cityWidth: '48%'
        })
    }

    //select province and city
    _selectCity = async (method, methodModal, object) => {

        await this.setState({
            [method]: object['city'],
            [methodModal]: false,

        })
    }



    // change tabs for request type
    _changeTab = (tab) => {
        this.setState({ tab: tab })
    }


    //clear all filter
    _clearFilter = () => {
        this.setState({
            province: '',
            showOnlineAdviser: false,
            tab: [false, false, false],
            provinceNumber: 100,
            city: '',
            provinceWidth: '100%',
            cityWidth: 0
        })
    }




    render() {

        const { advisers } = this.state

        return (

            <View style={styles.Advisers}>


                {/* header header */}

                <View style={styles.menu} >

                    <TouchableOpacity
                        style={styles.icons}
                        onPress={() => Actions.pop()}>
                        <Icon name="arrow-left" size={32} color={color.white} />
                    </TouchableOpacity>

                    <View style={styles.middle} >
                        <Text style={[styles.title, { backgroundColor: color.color1, paddingHorizontal: 4, borderRadius: 2, fontFamily: 'IS', fontSize: 15 }]} >مالیاتی</Text>
                        <Text style={styles.title} >مشاوره تلفنی </Text>
                    </View>

                    <View style={styles.icons} >
                        <TouchableOpacity style={styles.filter_box} onPress={() => this.setState({ filterModal: true })}>
                            <Image style={styles.filter_icon} source={require('./../../Assets/images/controls.png')} />
                            <Text style={[styles.title, { fontFamily: 'IS', fontSize: 14 }]} >فیلتر</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                {/* search box  */}

                <View style={styles.search_box}>
                    <TouchableOpacity
                        style={styles.search_btn}
                        activeOpacity={.6}
                        onPress={() => alert('search')}
                    >
                        <Icon size={25} name="magnify" color={color.white} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="برای جستجو نام یا کد مشاور را به صورت کامل وارد کنید"
                        placeholderTextColor='#999'
                        style={styles.search_input}
                    />

                </View>

                <ScrollView contentContainerStyle={styles.body} >

                    {
                        advisers.map((data, i) => {
                            return <AdviserItem
                                key={i}
                                press={() => this._aboutAdviser(data)}
                                buttonPress={() => alert('call')}
                                city={data.city}
                                price={data.price}
                                adviserName={data.name}
                                adviserCode={data.code}
                                orange={data.orange}
                                image={data.image}
                            />
                        })
                    }


                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.filterModal}
                    onRequestClose={() => {
                        this.setState({ filterModal: false })
                    }}>

                    <View style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height - StatusBar.currentHeight,
                        alignItems: 'center',
                        backgroundColor: color.white
                    }} >
                        <View style={styles.menu} >

                            <TouchableOpacity
                                style={[styles.icons, { width: 100, alignItems: 'flex-start' }]}
                                onPress={() => this.setState({ filterModal: false })}>
                                <Icon name="close" size={32} color={color.white} />
                            </TouchableOpacity>

                            <View style={[styles.middle, { width: 100 }]} >
                                <Text style={styles.title} >فیلتر</Text>
                            </View>

                            <View style={[styles.icons, { width: 100 }]} >
                                <TouchableOpacity style={styles.filter_box} onPress={() => this._clearFilter()}>
                                    <Text style={[styles.title, { fontSize: 10 }]} >پاک کردن فیلتر</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.modal_body} >

                            <View style={styles.modal_box1} >
                                <View style={styles.modal_select} >


                                    {/* select city */}
                                    <View style={styles.select_box}>
                                        <View style={[styles.modal_boxes, { width: this.state.provinceWidth }]} >
                                            <View style={styles.select_province}>

                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ provinceModal: true })
                                                }}
                                                    style={styles.select_touch}
                                                >
                                                    <Text style={styles.select_text}>
                                                        {
                                                            this.state.province !== '' ? this.state.province : "انتخاب کنید"
                                                        }
                                                    </Text>
                                                    <Icon style={{ transform: [{ rotate: '180deg' }] }} size={10} name="triangle" color={color.black} />
                                                </TouchableOpacity>

                                                <Text style={styles.select_name}> نام استان</Text>
                                            </View>

                                            {/* province modal  */}
                                            <Modal
                                                animationType="fade"
                                                transparent={true}
                                                visible={this.state.provinceModal}
                                                onRequestClose={() => {
                                                    this.setState({ provinceModal: false })
                                                }}>
                                                <TouchableOpacity style={styles.picker_modal} activeOpacity={1} onPress={() => this.setState({ provinceModal: false })} >
                                                    <View style={styles.picker_box}>
                                                        <ScrollView
                                                            contentContainerStyle={{
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                            style={{ width: '100%' }}>
                                                            {
                                                                this.state.provinces.map((province, i) => {
                                                                    return < TouchableOpacity
                                                                        key={i}
                                                                        style={styles.picker_button}
                                                                        activeOpacity={.3}
                                                                        onPress={() => this._selectProvince('province', 'provinceModal', province, i)}>
                                                                        <Text style={styles.picker_item} >{province}</Text>
                                                                    </TouchableOpacity>
                                                                })
                                                            }
                                                        </ScrollView>
                                                    </View>
                                                </TouchableOpacity>
                                            </Modal>
                                        </View>


                                        {/* select city */}
                                        {
                                            this.state.province !== '' ?
                                                <View style={[styles.modal_boxes, { width: this.state.cityWidth }]} >
                                                    <View style={styles.select_province}>

                                                        <TouchableOpacity onPress={() => {
                                                            this.setState({ cityModal: true })
                                                        }}
                                                            style={styles.select_touch}
                                                        >
                                                            <Text style={styles.select_text}>
                                                                {
                                                                    this.state.city !== '' ? this.state.city : "انتخاب کنید"
                                                                }
                                                            </Text>
                                                            <Icon style={{ transform: [{ rotate: '180deg' }] }} size={10} name="triangle" color={color.black} />

                                                        </TouchableOpacity>
                                                        <Text style={styles.select_name}>نام شهر </Text>
                                                    </View>

                                                    {/* city modal */}
                                                    <Modal
                                                        animationType="fade"
                                                        transparent={true}
                                                        visible={this.state.cityModal}
                                                        onRequestClose={() => {
                                                            this.setState({ cityModal: false })
                                                        }}>
                                                        <TouchableOpacity style={styles.picker_modal} activeOpacity={1} onPress={() => this.setState({ cityModal: false })} >
                                                            <View style={styles.picker_box}>
                                                                <ScrollView
                                                                    contentContainerStyle={{
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                    }}
                                                                    style={{ width: '100%' }}>
                                                                    {
                                                                        this.state.cities[this.state.provinceNumber].map((object, i) => {
                                                                            return < TouchableOpacity
                                                                                key={i}
                                                                                style={styles.picker_button}
                                                                                activeOpacity={.3}
                                                                                onPress={() => this._selectCity('city', 'cityModal', object)}>
                                                                                <Text style={styles.picker_item} >{object['city']}</Text>
                                                                            </TouchableOpacity>
                                                                        })
                                                                    }
                                                                </ScrollView>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </Modal>
                                                </View> : null
                                        }
                                    </View>



                                </View>



                                <View style={styles.modal_box2} >
                                    <Text style={styles.modal_title} >نمایش متخصصان</Text>


                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState((prevState) => {
                                                return { showOnlineAdviser: !prevState.showOnlineAdviser };
                                            })
                                        }
                                        }
                                        style={styles.modal_advister_online_box}
                                    >
                                        <Text style={styles.online} >آنلاین بودن</Text>

                                        {
                                            this.state.showOnlineAdviser ?
                                                <Icon name="checkbox-marked" size={24} color={color.color4} /> :
                                                <Icon name="checkbox-blank-outline" size={24} color={color.color3} />


                                        }
                                    </TouchableOpacity>


                                </View>


                                <View style={styles.modal_box3} >

                                    <Text style={styles.modal_title} >مرتب سازی</Text>

                                    <View style={styles.tab_parent} >
                                        <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab = [true, false, false])}>
                                            <Text style={styles.tab_text}>کمترین قیمت</Text>

                                            <View style={styles.tab_circle_border} >
                                                <Text style={[styles.tab_circle,
                                                { backgroundColor: this.state.tab[0] ? this.state.activeColor : this.state.inactiveColor }]} >
                                                </Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab = [false, true, false])}>
                                            <Text style={styles.tab_text}>بیشترین امتیاز</Text>
                                            <View style={styles.tab_circle_border} >
                                                <Text style={[styles.tab_circle,
                                                { backgroundColor: this.state.tab[1] ? this.state.activeColor : this.state.inactiveColor }]} >
                                                </Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab = [false, false, true])}>
                                            <Text style={styles.tab_text}>بیشترین قیمت</Text>
                                            <View style={styles.tab_circle_border} >
                                                <Text style={[styles.tab_circle,
                                                { backgroundColor: this.state.tab[2] ? this.state.activeColor : this.state.inactiveColor }]} >
                                                </Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                            </View>


                            <View style={styles.modal_btn} >
                                <Button
                                    width={Dimensions.get('window').width - 40}
                                    paddingVertical={10}
                                    paddingHorizontal={10}
                                    borderRadius={5}
                                    backgroundColor={color.color2}
                                    marginBottom={20}
                                    buttonPress={() => this.setState({ filterModal: false })}
                                    fontSize={15}
                                    color={color.white}
                                    buttonTitle="فیلتر کن"
                                    borderWidth={1}
                                    borderColor={color.color3}
                                    elevation={1}

                                />

                            </View>

                        </View>







                    </View>

                </Modal>
















            </View >




        );
    }
}


