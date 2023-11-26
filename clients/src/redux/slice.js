
import { createSlice } from "@reduxjs/toolkit";


export const storelSlice = createSlice({
  name: "storeShopping",
  initialState: {
    dataCarrusel: [],
    dataProductos:[],
    dataOneProductos:[],
    dataUsers:[],
    dataHombre:[],
    dataMujer:[],
    dataGrils:[],
    dataChildren:[],
    todalProductos:0,
   listaProductos:[]
  },
  reducers: {
    setCarrusel: (state, action) => {
      state.dataCarrusel = action.payload;
    },
    setProductos:(state,action)=>{
      state.dataProductos = action.payload;
    },
    setOneProductos:(state,action)=>{
      state.dataOneProductos = action.payload;
    },
    setUsuarios:(state,action)=>{
      state.dataUsers = action.payload;
    },
    setHombre:(state,action)=>{
      state.dataHombre = action.payload;
    },
    setMujer:(state,action)=>{
      state.dataMujer = action.payload;
    },
    setChildren:(state,action)=>{
      state.dataChildren= action.payload;
    },
    setGrils:(state,action)=>{
      state.dataGrils = action.payload;
    },
    addProductosToCart :(state,action)=>{
      state.listaProductos =[...state.listaProductos,action.payload]
      state.todalProductos+=1
    }

  },
});
// console.log([...state.listaProductos,...action.payload])
export const { setCarrusel,setProductos ,setOneProductos,setUsuarios ,setHombre,setMujer,setChildren,setGrils,addProductosToCart} = storelSlice.actions;
export default storelSlice.reducer;






