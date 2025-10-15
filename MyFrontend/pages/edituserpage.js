import {View, Text, TextInput, Button} from "react-native";
import {useState} from 'react'

import axios from 'axios'

export default function EditUserPage({route, navigation}){
    const {user} = route.params;

    const [firstname, setFirstname] = useState(user.first_name);
    const [lastname, setLastname] = useState(user.last_name);
    const [user_email, setUserEmail] = useState(user.email);
    const [user_gender, setUserGender] = useState(user.gender);
    const [user_password, setUserPassword] = useState(user.password);


    const handleUpdate = () => {
        if (!firstname || !lastname || !user_email || !user_gender || !user_password) {
            window.alert("Error", "Please fill up all required fields");
            return;
        }

        axios.put(`http://127.0.0.1:8000/registration/api/users/${user.id}/`, {
            first_name: firstname,
            last_name: lastname,
            email: user_email,
            gender: user_gender,
            password: user_password,
        })
        .then(() => {
            window.alert("Success", "User updated successfully!");
            navigation.goBack();
        })
        .catch((error) => {
            console.error(error);
            window.alert("Error", "Failed to update user");
        });
    };

    return(
        <View>
            <Text>Edit User</Text>

            <TextInput value={firstname} onChangeText={setFirstname}/>

            <TextInput value={lastname} onChangeText={setLastname}/>

            <TextInput value={user_email} onChangeText={setUserEmail}/>

            <TextInput value={user_gender} onChangeText={setUserGender}/>

            <TextInput value={user_password} onChangeText={setUserPassword}/>

            <View>
                <Button title="Update Record" onPress={handleUpdate}/>    
            </View>

        </View>
    )
}