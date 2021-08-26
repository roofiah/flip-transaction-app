import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TransactionList from '../screens/Home/TransactionList';
import TransactionDetail from '../screens/Detail/TransactionDetail';
import { Colors } from '../styles/Colors';
import { FontType } from '../styles/Fonts';

const AppStack = createStackNavigator({
    TransactionList: {
        screen: TransactionList,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
        }),
    },
    TransactionDetail: {
        screen: TransactionDetail,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
        }),
    },
}, {
    defaultNavigationOptions: {
        headerPressColorAndroid: Colors.rippleColor,
        headerStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.iron,
            elevation: 0,
        },
        headerTitleStyle: {
            fontFamily: FontType.semiBold,
            fontSize: 18,
            marginLeft: 0,
        },
        headerTintColor: Colors.black,
    }
}, );

const AppNavigation = createAppContainer(AppStack);

export default AppNavigation;
