import{configureStore}from '@reduxjs/toolkit'
import  storeShopping from './slice'

export default configureStore({
   reducer:{
      storeShopping
   }
})