import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './pages/Homepage';

const Stack=createNativeStackNavigator();

export default function Dashboard(){
    return (
        <NavigationContainer>
            <Stack.Navigator intialRouteName="Home">
                <Stack.Screen name="Home" component={Homepage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}