const Validate =(datos)=>{
    let errores={}
    if(datos.colores === ''){
 errores.colores='Choose a color, please'
    }
    if(datos.tallaAdulto === '' ){
       errores.tallaAdulto = 'Choose a size, please'
    }
    if (datos.tallaKit==='') {
        errores.tallaKit='Choose a size, please'
    }
    return errores
}
export default Validate