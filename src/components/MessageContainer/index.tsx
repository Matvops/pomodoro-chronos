import type React from "react";
import { Bounce, ToastContainer } from "react-toastify";

type MessageContainerType = {
  children: React.ReactNode
};

export function MessageContainer({ children }: MessageContainerType) {


  return (
    <>
    
      {children}

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          draggable
          theme="light"
          transition={Bounce}
        />
    </>
  )
}