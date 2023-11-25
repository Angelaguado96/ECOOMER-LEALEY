"use client"
import {Provider} from "react-redux"
import store from "./store"


const Provaider = ({children})=>{
   return  <Provider store={store}>
      {children}
     </Provider>

}
export default  Provaider