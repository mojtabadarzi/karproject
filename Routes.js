import React from 'react';

import { Router, Scene, Actions } from 'react-native-router-flux';
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AboutAdviser from './src/screens/AboutAdviser';
import Advisers from './src/screens/Advisers';






//back button
const backButton = () => (
    <TouchableOpacity
        onPress={() => Actions.pop()}
        style={{
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <View >
            <Icon size={36} name="chevron-right" color="#A52D53" />
        </View>
    </TouchableOpacity>
);



//pass nothing 
const nothing = () => { return <View /> }


export default class Routes extends React.Component {


    render() {
        // if (this.state.loading) {
        //     return <Splash />
        // }

        return (

            < Router >
                <Scene key="root" >

                    <Scene key="Advisers" component={Advisers}
                        hideNavBar={true}
                        renderBackButton={() => nothing}
                        renderRightButton={() => nothing}
                        navigationBarStyle={styles.login_style_bar}
                    />
                    <Scene key="AboutAdviser" component={AboutAdviser}
                         hideNavBar={true}
                         renderBackButton={() => nothing}
                         renderRightButton={() => nothing}
                         navigationBarStyle={styles.login_style_bar}
                    />


                </Scene>
            </Router >
        )

    }
}



const styles = ({
    login_style_bar: {
        backgroundColor: '#eee',
        elevation: 0,
        height: 50,
    },
    login_style_bar_detail: {
        backgroundColor: 'transparent',
        shadowColor: "#f7f7f7",
        elevation: 0,
        height: 0,
    },
    bell: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#B22850',
        start: 10,
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_text: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'ISFMedium',
    },

    notification_box: {
        width: 40,
        height: 40,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#B22850',
        start: 10,
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_text: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'ISFMedium',
    },
    title_style: {
        color: '#333',
        paddingRight: 20,
        fontFamily: 'ISBold',
        textAlign: 'right',
        width: '100%',
        fontSize: 16,
        backgroundColor: '#eee'
    }
})


