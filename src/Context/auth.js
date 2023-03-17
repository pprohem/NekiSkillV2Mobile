import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';
import { api } from '../services/api';
export const AuthContext = createContext(); 


export const AuthProvider = ({children}) => { 
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
 

  const login = (username, password) => { 
    setIsLoading(true)
    return api.post("/login", {
      username,
      password
    })
    .then(res => {
      let userInfo = res.data
      setUserInfo(userInfo)
      setUserToken(userInfo.token)
      
      AsyncStorage.setItem("ID", userInfo.id)
      AsyncStorage.setItem("user", userInfo.username)
      AsyncStorage.setItem("jwtToken", userInfo.token)
      
      api.defaults.headers.Authorization = `Bearer ${userInfo.token}`;
   
    })
    .catch(e => { 
      console.log(e)

    })
  }

  const logout = () => { 
    setUserToken(null);
    setIsLoading(true);
    AsyncStorage.removeItem("jwtToken")
    AsyncStorage.removeItem("ID")
    AsyncStorage.removeItem("user")
  }

  // const isLoggedIn = async() => { 
  //   try {
  //     setIsLoading(true);
  //     let userInfo = await AsyncStorage.getItem('userInfo');
  //     let userToken = await AsyncStorage.getItem('jwtToken');
  //     userInfo = JSON.parse(userInfo)

  //     if(userInfo) { 
  //       setUserToken(userToken);
  //       setUserInfo(userInfo)
  //     }
  //     setIsLoading(false)
  //   } catch(e) { 
  //     console.log('isLogged in error'  + e )
  //   }
  // }
  return (
    <AuthContext.Provider value={{login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}