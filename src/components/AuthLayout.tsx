import { Outlet } from "react-router";

import NavHeader from "../assets/NavHeader.svg"
import loginBackground from "../assets/Login_Background.png"

export function AuthLayout(){
    return (
        <div className="w-screen h-screen flex flex-col items-end bg-cover bg-center" style={{backgroundImage: `url(${loginBackground})` }}>
            
           <main className="bg-gray-600 flex flex-col py-12 px-40 mt-3 rounded-tl-lg md:min-w-[462px]">
            <img src={NavHeader} alt="icone de login" />
            <Outlet />
          </main>
        </div>
    )
}