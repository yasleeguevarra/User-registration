import {View, Text, FlatList, Alert} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import Styles from '../styles.js';
import { Button } from "react-native-web";

export default function userlistpage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/registration/api/users/')
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]
    );

    const handleEdit = (user) => {
        navigation.navigate('EditUser',{user});
    }

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",
            (
                {text: "Cancel", style: "cancel"},
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
                        .then(() => {
                            Alert.alert("Success", "User deleted successfully");
                        })
                        .catch((err) => {
                            console.log(err);
                            Alert.alert("Error", "Failed to delete user");
                        });
                    },
                }   
            )
        );
    };

    return (
        <View>
            <Text style={Styles.userTitle}>Registered Users</Text>
            <FlatList 
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={Styles.userCard}>
                    <Text style={Styles.userText}>Firstname: {item.first_name}</Text>
                    <Text style={Styles.userText}>Lastname: {item.last_name}</Text>
                    <Text style={Styles.userText}>email: {item.email}</Text>
                    <Text style={Styles.userText}>Gender: {item.gender}</Text>
                        <View>
                            <Button title="Edit"
                            color="skyblue"
                            onPress={() => handleEdit(item)} />
                            <Button title="Delete"
                            color="skyblue"
                            onPress={() => handleDelete(item.id)} />    

                        </View>
                </View>
            )}/>
        </View>
    );
}
