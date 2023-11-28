"use client"
import React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import QuinesSomos from "./QuinesSomos";
import Tema from "./Tema";
import { useState,useEffect } from "react";
import { useTheme } from "@/src/components/context/AuthContext";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";



export default function Menu(props) {
  const { singUp, user, isAutorisado,cargarUsuarioDesdeLocalStorage } = useTheme();
  console.log(user)
  const [userInfo, setUserInfo] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
 //  ejecuto al funcion si  hay info en locaStore  para que permanesca  el incio de sesicon  
  useEffect(() => {
    cargarUsuarioDesdeLocalStorage();
  }, []);
 
  return (
    <Navbar className="" isBordered>
      <NavbarContent justify="start">
          <h1>LOGO</h1>
      </NavbarContent>
      <div className="md:flex h-25 p-4 items-center">
        <div className="flex flex-col md:flex-row md:mx-20">
          <Link
            href="/"
            className="my-1 text-sm text-gray-900 font-medium hover:text-indigo-500 md:mx-2 md:my-0"
          >
            <Button color="danger">Inicio</Button>
          </Link>

          <QuinesSomos></QuinesSomos>
          <Link
            href=""
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-2 md:my-0"
          >
            <Button color="danger"> Pedido por Mayor</Button>
          </Link>

      <div className="items-center" >
            {isAutorisado ? (
              <div className="md:flex  p-2 items-center ">

                <div  className="w-15 h-15  mr-2 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300 ease-in-out flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4em"
                    height="2em"
                    viewBox="0 0 256 256"
                    fill="white"
                    {...props}
                  >
                    <path d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4ZM96 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-72a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm48 72a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z" />
                  </svg>
                </div>
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="danger"
                      name="Jason Hughes"
                      size="sm"
                      src={user.imagen || user.imageUrl}
                      onClick={handleMenuToggle}
                    />
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Profile Actions"
                    variant="flat"
                    isOpen={isMenuOpen}
                    onClick={handleMenuToggle}
                  >
                    <DropdownItem key="profile" className="h-14 m-1 gap-2">
                    <h3><b>Bienvenidos a Lealey</b></h3>
                    <a href="/misProductos">Mis productos</a>
                      <p>Nombre: {user.nombre} </p>
                      <p>Correo: {user.correo} </p>
                    </DropdownItem>

                    <DropdownItem key="logout" color="danger" onClick={()=>{
                      singUp()
                      router.push('/')
                    }}>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : (
              <div  className="md:flex  items-center" >
                <Link
                  href="/login"
                  className="text-sm text-gray-700 font-medium hover:text-indigo-500  md:my-0"
                >
                  <Button color="danger">login</Button>
                </Link>
              </div>
            )}
       </div>
          <span className="icon-[material-symbols--shopping-bag]"></span>
          <div className="flex  p-1 justify-center md:block">
          <Tema/>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
