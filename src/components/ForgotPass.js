import React, {Component} from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/styles'

export default function ForgotPass({navigation}){    
      

    return (
            <View style={styles.container}>
                <Image
                    source={require('../images/logo.jpg')}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite email cadastrado'
                />
                <TouchableOpacity
                    onPress={() => alert("Email de recuperação enviado!")}
                >
                    <Text style={styles.confirmar}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push("SignIn")}
                >
                    <Text style={styles.confirmar}>Login</Text>
                </TouchableOpacity>
            </View>
    )
 }