"use client";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "../components/context/AuthContext";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <NextUIProvider>
          <Toaster />
          {children}
        </NextUIProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};
export default Providers;
