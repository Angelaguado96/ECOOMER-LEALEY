import axios from './axios'
 
export const loginRequest = (user)=> axios.post('/login/user-login',user)
   

export const logoutRequest = ()=> axios.post('/login/user-logout') 