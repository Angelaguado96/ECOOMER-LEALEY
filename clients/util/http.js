
 "use client"
 import { setCarrusel ,setProductos ,setOneProductos,setUsuarios ,setHombre,setMujer,setChildren,setGrils} from "@/src/redux/slice";
 import axios from "axios";
 import { toast } from "react-hot-toast";

export const allCarrucel = () => async (dispatch) => {
   try {
     const {data} = await axios.get("http://localhost:3002/carrusel/imagen-carrusel");
     dispatch(setCarrusel(data));
    //  console.log(data)
   } catch (error) {
     console.error(error);
     
   }
 };

 export const allProductos=()=> async (dispatch) => {
  try {
    const {data}= await axios.get('http://localhost:3002/productos/add-productos')
    dispatch(setProductos(data));
  } catch (error) {
      console.log({error: error.message});    
  }
 }


 export const productosOne=(id)=> async (dispatch) => {
  try {
    const {data}  = await axios (`http://localhost:3002/productos/one-productos/${id}`)
    dispatch(setOneProductos(data));
  } catch (error) {
      console.log({error: error.message});    
  }
 }


 export const createUsuario =(datas)=> async(dispatch) => {
 
  console.log("data entrate ",datas)
    try {
      const { data } = await axios.post(
        `http://localhost:3002/users/crear-users`,
        datas
      );
      console.log("se subioo", data);

      // Notificación de éxito
      toast.success("Usuario creado con éxito", {
        duration: 2000,
       // Duración en milisegundos
      });

      setTimeout(() => {
        window.location.href = '/login';  
      }, 1000); 
      dispatch(setUsuarios(data));
    } catch (error) {
      console.log(error);
      // Notificación de error
      toast.error("Ese correo ya existes", {
        duration: 4000,
      });
      
    }
  };

    export const  allHombre = ()=> async (dispatch)=>{
        
       try {
          const  {data} = await  axios.get ('http://localhost:3002/hombre/todos-hombres')
          console.log(data)
           dispatch (setHombre(data))
       } catch (error) {
          console.error ({error: error.message})
       }

    }
    export const  allMujer = ()=> async (dispatch)=>{
        
       try {
          const  {data} = await  axios.get ('http://localhost:3002/mujer/todos-mujer')
          console.log(data)
           dispatch (setMujer(data))
       } catch (error) {
          console.error ({error: error.message})
       }

    }
    export const  allChildren = ()=> async (dispatch)=>{
        
       try {
          const  {data} = await  axios.get ('http://localhost:3002/children/todos-children')
          console.log(data)
           dispatch (setChildren(data))
       } catch (error) {
          console.error ({error: error.message})
       }

    }
    export const  allGils = ()=> async (dispatch)=>{
        
       try {
          const  {data} = await  axios.get ('http://localhost:3002/girls/todos-girls')
          console.log(data)
           dispatch (setGrils(data))
       } catch (error) {
          console.error ({error: error.message})
       }

    }


