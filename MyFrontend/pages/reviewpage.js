import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Styles from '../styles.js';
import axios from 'axios';

export default function ReviewPage({ navigation, route }) {
    const { formData } = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/registration/api/register/', formData);
            Alert.alert('Success', 'User registered successfully');
            navigation.goBack();
        } catch (error) {
            console.error('Error', JSON.stringify(error.response?.data || "Something went wrong"));
        }
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.headerText}>Review Information</Text>

            <View style={Styles.infoContainer}>
                <Text style={Styles.infoText}>Firstname: {formData.first_name}</Text>
                <Text style={Styles.infoText}>Lastname: {formData.last_name}</Text>
                <Text style={Styles.infoText}>Email: {formData.email}</Text>
                <Text style={Styles.infoText}>Password: {formData.password}</Text>
                <Text style={Styles.infoText}>Gender: {formData.gender}</Text>
            </View>

            <Pressable
                style={Styles.button}
                onPress={() => navigation.goBack()}>
                <Text style={Styles.buttonText}>Go back to edit</Text>
            </Pressable>

            <Pressable
                style={Styles.button}
                onPress={() => handleSubmit()}>
                <Text style={Styles.buttonText}>Submit</Text>
            </Pressable>
        </View>
    );
}