import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import * as color from '../colors'



const styles = StyleSheet.create({

    AboutAdviser: {
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
        justifyContent: 'center'
    },

    title: {
        fontSize: 16,
        fontFamily: 'ISBold',
        textAlign: 'center',
        color: color.white
    },
    icons: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0
    },
    notification_circle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        end: 10,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderWidth: 2,
        borderRadius: 20,
        zIndex: 99
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    filter_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        height: Dimensions.get('window').height - StatusBar.currentHeight - 50,
    },
    up: {
        flexDirection: 'column',
        width: '100%',
    },
    box_1: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: color.placeholder
    },
    share_love: {
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    love: {
        flexDirection: 'row'
    },
    share: {
        marginLeft: 20
    },
    level: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image_parent: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: color.color3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:color.color3
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    online_light: {
        width: 22,
        height: 22,
        borderRadius: 100,
        backgroundColor: color.color5,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: color.white,
        bottom: 0,
        right: 0,
        position: 'absolute',
        zIndex: 10

    },
    title_box: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    advider_title: {
        fontFamily: 'ISBold',
        color: color.balck,
        fontSize: 16,
        textAlign: 'right'
    },
    code: {
        fontFamily: 'ISF',
        color: color.balck,
        fontSize: 12,
        textAlign: 'right'

    },
    location: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    location_text: {
        fontFamily: 'IS',
        color: color.font,
        fontSize: 12,
        marginRight: 5,
    },
    items: {
        flexDirection: 'column',
        marginTop: 10,
        padding: 20
    },
    item_parents: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '33%'
    },
    item_circle: {
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: color.white,
        borderRadius: 100,
        elevation: 4
    },
    item_text: {
        fontFamily: 'IS',
        color: color.font,
        fontSize: 10,
        marginTop: 10,
    },
    button_box: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        fontFamily: 'ISF',
        color: color.font,
        fontSize: 14,
        marginBottom: 5,
    }

})




export default styles;