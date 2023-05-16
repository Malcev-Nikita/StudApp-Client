import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
// import { useTypeSelector } from '../hooks/useTypeSelector';
import { MaskedTextInput } from 'react-native-mask-text';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login_style from '../styles/Login';

function Login() {
    // const { users, loading, error } = useTypeSelector(state => state.user);
    const [password, viewPassword] = useState(false);

    const [form, setForm] = React.useState({
        phone: '',
    });
    
    const handleForm = (key, value) => {
        setForm((currentForm) => ({
          ...currentForm,
          [key]: value,
        }));
    };

    return (
        <View style={Login_style.page}>
            <MaskedTextInput 
                mask="+9 (999) 999-99-99"
                placeholder="Номер телефона"
                onChangeText={(value) => handleForm('phone', value)}
                keyboardType="numeric" 
                style={Login_style.input}
            />
            {
                password ? 
                (
                    <View style={Login_style.container}>
                        <TextInput 
                            placeholder='Пароль'
                            style={Login_style.input}
                        />
                        <Ionicons name="eye-off-outline" size={30} color="#91919F" style={Login_style.icon} onPress={() => viewPassword(false)} />
                    </View>
                ) : 
                (
                    <View style={Login_style.container}>
                        <TextInput 
                            placeholder='Пароль'
                            style={Login_style.input}
                            secureTextEntry={true}
                        />
                        <Ionicons name="eye-outline" size={30} color="#91919F" style={Login_style.icon} onPress={() => viewPassword(true)} />
                    </View>
                )
            }

            <TouchableOpacity style={Login_style.button} > 
                <Text style={Login_style.button_text}>Войти</Text>
            </TouchableOpacity>

            <TouchableOpacity> 
                <Text style={Login_style.text_button}>Забыли пароль?</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;