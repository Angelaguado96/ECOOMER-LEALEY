import React from "react";
import axios from "axios";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      // Realiza una solicitud POST a la ruta "/User-logout"
      const response = await axios.post("/User-logout");
      
      if (response.status === 200) {
        // El logout fue exitoso, puedes realizar acciones adicionales si es necesario
        console.log("Logout exitoso");
        // Redirige al usuario a la página de inicio de sesión o a donde corresponda
        window.location.href = "/login"; // Cambia la ruta según tu aplicación
      }
    } catch (error) {
      console.error("Error al realizar el logout", error);
    }
  };

  return (
    <button onClick={handleLogout}>Cerrar Sesión</button>
  );
};

export default LogoutButton;
