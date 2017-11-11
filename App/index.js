import React, {Component} from 'react';
import { Text, View, ImageBackground, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ScreenMain from './ScreenMain'
import ScreenTabs from './ScreenTabs'

const StackNav = StackNavigator({
    main: { screen: ScreenMain },
    tabs: { screen: ScreenTabs }
}, {
    cardStyle: {
        backgroundColor: 'transparent'
    }
});

export default class App extends Component {
    render() {
        return (
            <ImageBackground style={styles.imageView} source={require('./img/Hajj.jpg')}>
                <StackNav />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  imageView:{
    width: null,
    height: null,
    flex: 1
  }
});
