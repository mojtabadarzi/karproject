import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import * as color from '../colors'


const styles = StyleSheet.create({
    Advisers: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        alignItems: 'center',
        backgroundColor: color.white
    },
    menu: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: color.color2,
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 18,
        fontFamily: 'ISBold',
        textAlign: 'center',
        color: color.white
    },
    icons: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    search_box: {
        width: Dimensions.get('window').width - 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: color.placeholder,
        marginTop: 10,
        flexDirection: 'row',
        height: 36,
        overflow: 'hidden',
    },
    search_btn: {
        justifyContent: 'center',
        position: 'absolute',
        width: 40,
        height: '100%',
        backgroundColor: color.color2,
        alignItems: 'center',
        right: 0,
        zIndex: 100

    },
    search_input: {
        fontSize: 12,
        paddingRight: 45,
        fontFamily: 'IYL',
        textAlign: 'right',
        width: '100%',
        height: 36,
        color: color.black
    },
    body: {
        width: Dimensions.get('window').width,
        paddingBottom: 100,
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    modal_body: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - StatusBar.currentHeight - 50,
        alignItems: 'center',
        backgroundColor: color.white,
        justifyContent: 'space-between'
    },
    modal_box1: {
        flexDirection: 'column',
        width: '100%',
        padding: 20
    },
    modal_box2: {
        width: '100%',
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: color.black,
        width: '100%',
        justifyContent: 'flex-end',
        paddingVertical: 20
    },
    modal_box3: {
        width: '100%',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-end',
        paddingVertical: 20,
        alignItems: "flex-end"
    },
    modal_btn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal_title: {
        fontFamily: 'IS',
        fontSize: 14,
        color: color.black,
        paddingBottom: 5
    },
    modal_advister_online_box: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end'
    },
    online: {
        marginRight: 5,
        fontFamily: 'IS',
        fontSize: 12,
        color: color.placeholder
    },
    modal_select: {
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: color.black
    },
    select_box: {
        flexDirection: 'row-reverse',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    select_province: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center'
    },
    select_touch: {
        width: '48%',
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: color.color3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    select_text: {
        marginRight: 10,
        fontSize: 12,
        textAlign: 'center',
        color: color.placeholder,
        fontFamily: 'ISBold'
    },
    select_name: {
        fontSize: 14,
        color: color.black,
        textAlign: 'right',
        fontFamily: 'ISMedium',
        width: '48%'
    },
    filter_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    edit_details_1: {
        width: Dimensions.get('window').width - 50,
        flexDirection: 'column',
        paddingVertical: 20,
        borderRadius: 5,
        position: 'relative'
    },
    edit_details_details: {
        flexDirection: 'column',
        width: '100%',

    },
    titles: {
        width: '100%',
        fontSize: 15,
        fontFamily: 'ISBold',
        color: '#636363',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        paddingBottom: 10,
    },
    modal_boxes: {
        backgroundColor: '#fff',
        borderRadius: 15
    },
    picker_modal: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker_box: {
        width: '90%',
        paddingHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        overflow: 'hidden',
    },
    picker_item: {
        fontFamily: 'ISBold',
        paddingVertical: 10,
        fontSize: 12,
        textAlign: 'center',
        color: '#333'
    },
    picker_button: {
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        width: '100%',
        backgroundColor: '#fff',
        padding: 5
    },
    tab_box: {
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",


    },
    tab_parent: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    tab_text: {
        fontSize: 10,
        fontFamily: 'ISBold',
        marginRight: 5,
        color: color.black
    },
    tab_circle_border: {
        width: 16,
        height: 16,
        borderRadius: 20,
        borderColor: color.black,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tab_circle: {
        width: 10,
        height: 10,
        borderRadius: 20,
    },
    filter_icon: {
        width: 16,
        height: 16,
        marginRight: 5
    }


})

export default styles;