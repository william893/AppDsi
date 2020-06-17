import React, {Component} from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/styles'


export default function CreateAccountService({navigation}){    
      

    return (
            <View style={styles.container}>
                <Image
                    source={require('../images/logo.jpg')}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome Serviço'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome Serviço'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome Serviço'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome Serviço'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome Serviço'
                />

                
                <TouchableOpacity
                    onPress={() => navigation.push("SignIn")}
                >
                    <Text style={styles.confirmar}>Confirmar</Text>
                </TouchableOpacity>
            </View>
    )
 }