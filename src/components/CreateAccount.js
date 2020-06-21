import React, {Component} from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/styles'


export default function CreateAccount({navigation}){    
      

    return (
            <View style={styles.container}>
                <Image
                    source={require('../images/logo.jpg')}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Telefone3'
                />
                <TextInput
                    style={styles.input}
                    placeholder='CNPJ/CPF'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Endereço'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    onPress={() => navigation.push("CreateAccountService")}
                >
                    <Text style={styles.confirmar}>Prestador</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push("SignIn")}
                >
                    <Text style={styles.confirmar}>Confirmar</Text>
                </TouchableOpacity>
            </View>
    )
 }