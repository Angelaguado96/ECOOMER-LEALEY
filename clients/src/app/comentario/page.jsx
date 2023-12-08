"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { useDispatch  } from "react-redux";
import {commentary} from '@/util/http'
import { useRouter } from "next/navigation";










export default function Comentario() {
  const router = useRouter()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch()

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    
    setDatos((preDatos) => ({
      ...preDatos,
      puntaje: selectedRating,
    }));
  };
  const userData = JSON.parse(localStorage.getItem("token"));

  const [datos, setDatos] = useState({
    UsuarioId: userData.id,
    nombre: userData.nombre,
    correo: userData.correo,
    imagen: userData.imagen,
    comentario: "",
    puntaje: null,
  });
  console.log(datos);

  const handlerComentario = (even) => {
    setDatos({ ...datos, [even.target.name]: even.target.value });
  };

  const  handleEnviarDatos =()=>{
    dispatch(commentary(datos))
    router.push('/')
  }


  return (
    <>
      <Button onPress={onOpen}>Dejamos </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Hola ..!! dejanos un comentario
            </ModalHeader>
            <div className="flex m-2 gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                className="m-5"
                src={userData.imagen}
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {userData.nombre}
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  {userData.correo}
                </h5>
              </div>
            </div>
            <ModalBody>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    rating={rating}
                    onClick={() => handleStarClick(star)}
                    className={`cursor-pointer text-3xl ${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
                <p className="ml-2">Tu calificación: {rating}</p>
              </div>

              <label>comentario</label>
              <input
                type="text"
                name="comentario"
                id="comentario"
                value={datos.comentario}
                onChange={handlerComentario}
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleEnviarDatos} color="primary">
                Envia comentario
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
