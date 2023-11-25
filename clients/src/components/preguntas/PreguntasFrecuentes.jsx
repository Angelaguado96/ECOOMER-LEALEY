"use client"
import {Accordion, AccordionItem} from "@nextui-org/react"
import Comentarios from '../comentarios/Comentarios'
 

const PreguntasFrecuentes = () => {

   const defaultContent =
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

 return (
  <div className="md:ml-100 md:m-10  flex flex-col md:flex-row m-10">
 <div className="md:order-2 flex items-center  md:ml-auto">
    <Comentarios />
  </div>
  <div className="md:order-1">
    <h1 className="ml-5 md:ml-10 m-5 md:m-5 text-3xl md:text-4xl">TUS PREGUNTAS FRECUENTES</h1>
    <Accordion variant="splitted">
      <AccordionItem className="w-full md:w-80" key="1" aria-label="Accordion 1" title="Pregunta frecuentes 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem className="w-full md:w-80" key="2" aria-label="Accordion 2" title="Pregunta frecuentes 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem className="w-full md:w-80" key="3" aria-label="Accordion 3" title="Pregunta frecuentes 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    
  </div>
</div>

 );
}

export default PreguntasFrecuentes
