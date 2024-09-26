const Validate =(datos)=>{
    let errores={}
    if(datos.colores === '') {
     errores.colores='Por favor, añada un color para la prenda'
    }
    if (datos.tallaAdulto === '' && datos.tallaKit === '') {
        errores.Talla = 'Por favor, añada su talla';
       
      } else {
        errores.Talla = '';
      
      }
      
   
    
    return errores
}
export default Validate