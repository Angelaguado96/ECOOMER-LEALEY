"use client"
import { useState ,useEffect} from "react";
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";




 const Avatarrr=( )=> {



  const [userInfo, setUserInfo] = useState(null);

const [isMenuOpen, setIsMenuOpen] = useState(false);


useEffect(() => {
  // Intenta obtener la información de inicio de sesión desde localStorage
  const storedUserInfo = localStorage.getItem("token");

  if (storedUserInfo) {
    // Si se encuentra información en localStorage, convierte el JSON a objeto
    const userInfoObject = JSON.parse(storedUserInfo);
    setUserInfo(userInfoObject);
  }
}, []);


const handleMenuToggle = () => {
  setIsMenuOpen(prevState => !prevState);
};
  return (
    <Dropdown placement="bottom-end">
 
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src={userInfo?.imagen} 
          onClick={handleMenuToggle} // Agrega el onClick para abrir/cerrar el menú
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat" isOpen={isMenuOpen} onClick={handleMenuToggle}>
        <DropdownItem key="profile" className="h-14 gap-2">
          <p>Correo: {userInfo?.correo}</p>
          <p>Correo: {userInfo?.nombre}</p>
        </DropdownItem>
     
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
export default Avatarrr