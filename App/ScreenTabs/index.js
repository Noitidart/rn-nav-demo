import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Page1 from '../Page1'
import Page2 from '../Page2'

export default class ScreenTabs extends Component {
    static navigationOptions = {
        title: 'Tabs Screen'
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Page1 />
            </View>
        )
    }
}
