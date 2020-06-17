import React, { Component } from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../src/components/SignIn'
import CreateAccount from '../src/components/CreateAccount'
import ForgotPass from '../src/components/ForgotPass'
import CreateAccountService from '../src/components/CreateAccountService'




const Stack = createStackNavigator()


export default class App extends Component{

  render(){

    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'SignIn' component = {SignIn}/>
          <Stack.Screen name = 'CreateAccount' component = {CreateAccount}/>
          <Stack.Screen name = 'ForgotPass' component = {ForgotPass}/>
          <Stack.Screen name = 'CreateAccountService' component = {CreateAccountService}/>
        </Stack.Navigator>
      </NavigationContainer>
    
    )
  }

}