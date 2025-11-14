import { Outlet } from "react-router";
import NavHeader from "../assets/NavHeader.svg";
import loginBackground from "../assets/Login_Background.png";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row bg-gray-900">
      
      
      <div
        className="hidden lg:flex w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBackground})` }}
      ></div>

      
      <main className="
        w-full lg:w-1/2 h-full 
        bg-white flex flex-col items-center 
        px-6 py-8 
        lg:px-24 lg:py-20
        rounded-tl-none lg:rounded-tl-3xl
      ">
        <img className="w-40 mb-8" src={NavHeader} alt="icone de login" />

        <Outlet />
      </main>

    </div>
  );
}
