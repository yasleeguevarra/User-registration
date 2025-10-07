import {View, Text, FlatList} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import Styles from '../styles.js';

export default function userlistpage() {
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
                </View>
            )}/>
        </View>
    );
}
