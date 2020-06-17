import React, {Component} from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/styles'

import CreateAccount from './CreateAccount'


export default function SignIn({navigation}){    
      

    return (
        <View style={styles.container}>
        <Image
          source={require('../images/logo.jpg')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite seu Email'
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Digite sua Senha'      
        />
        <TouchableOpacity 
          style={styles.buttomLogin}
          onPress={ () => alert("Clicou Login!")}
        >
          <Text style={styles.buttomText}>Login</Text>
        
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttomLogin}
          onPress={ () => alert("Clicou Google!")}
        >
          <Text style={styles.buttomText}>Entrar com Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.push("CreateAccount")}
          /*onPress={ () => alert("Clicou cadastre-se!")}*/
        >
          <Text style={styles.cadastrar}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push("ForgotPass")}
          /*onPress={ () => alert("Clicou esqueci minha senha!")}*/
        >
          <Text style={styles.cadastrar}>Esqueci minha Senha</Text>
        </TouchableOpacity>


      </View>

    )
  

}