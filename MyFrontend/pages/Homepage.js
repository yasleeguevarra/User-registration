import React from 'react';
import { View, Text, Button} from 'react-native';
import Styles from '../styles.js';

export default function Homepage({navigation}) {
    return (

        <View style={Styles.container}> 
            <Text style={Styles.headerText}>Homepage!</Text> 

    
            <View style={Styles.button}> 
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}/>
            </View>

            <View style={Styles.button}>
                <Button
                    title="View User"
                    onPress={() => navigation.navigate('UserList')}/>
            </View>

        </View>
    );
    
}