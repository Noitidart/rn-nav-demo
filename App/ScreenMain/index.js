import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class ScreenMain extends Component {
    static navigationOptions = {
        title: 'Main Screen'
    }
    render() {
        return (
            <View>
                <Text>ScreenMain</Text>
                <Button title="Go to tabs" onPress={this.gotoTabs} />
            </View>
        )
    }

    gotoTabs = () => this.props.navigation.navigate('tabs')
}
