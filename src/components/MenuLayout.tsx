import { Outlet } from "react-router-dom";
import { useState } from "react";

import logoDark from "../assets/Logo_IconDark.svg";
import menu from "../assets/menu.svg";
import x from "../assets/x.svg";
import clipBoard from "../assets/clipboard-list.svg";
import plus from "../assets/plus.svg";
import circleUser from "../assets/circle-user.svg";
import logOut from "../assets/log-out.svg";

import { ModalPerfil } from "./Profile";


export function MenuLayout() {
    const [open, setOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);

    
    const [perfilOpen, setPerfilOpen] = useState<boolean>(false);

    return (
        <div className="bg-gray-100 w-screen min-h-screen flex flex-col md:flex-row">

            
            <aside className="hidden md:flex flex-col justify-between bg-[#15161A] w-64 py-8 px-6">

                <div className="flex items-center gap-3 mb-10">
                    <img src={logoDark} className="w-10 h-10" />
                    <div>
                        <h2 className="text-lg text-white font-bold">HelpDesk</h2>
                        <h3 className="text-xxs text-blue-base uppercase font-bold">Cliente</h3>
                    </div>
                </div>

                <nav className="flex flex-col gap-2">
                    <a href="/" className="bg-[#3948D6] text-white flex items-center gap-3 p-4 rounded-lg">
                        <img src={clipBoard} className="w-6 h-6" />
                        Meus chamados
                    </a>

                    <a href="/newCall" className="text-gray-300 flex items-center gap-3 p-4 rounded-lg hover:bg-gray-800 transition">
                        <img src={plus} className="w-6 h-6" />
                        Criar chamado
                    </a>
                </nav>

                <footer className="relative mt-auto flex items-center gap-4 px-2">
                    <button
                        onClick={() => setUserOpen(!userOpen)}
                        className="text-sm text-white bg-blue-600 rounded-full p-4"
                    >
                        UC
                    </button>

                    <div>
                        <h3 className="text-sm text-white font-bold">Usuário Cliente</h3>
                        <span className="text-xs text-gray-400">user.client@test.com</span>
                    </div>

                    {userOpen && (
                        <div className="absolute left-64 bottom-0 bg-[#15161A] p-6 rounded-xl shadow-xl w-52 animate-fadeIn">
                            <p className="text-gray-400 text-xs mb-4 tracking-wide">OPÇÕES</p>

                            <button
                                onClick={() => {
                                    setPerfilOpen(true);
                                    setUserOpen(false);
                                }}
                                className="text-white flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition w-full text-left"
                            >
                                <img src={circleUser} className="w-5 h-5" />
                                Perfil
                            </button>

                            <a
                                href="/logout"
                                className="text-[#D03E3E] flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition"
                            >
                                <img src={logOut} className="w-5 h-5" />
                                Sair
                            </a>
                        </div>
                    )}
                </footer>
            </aside>

            
            <nav className="flex md:hidden items-center justify-between px-5 py-4 bg-[#15161A] w-full shadow-md">

                <button
                    onClick={() => {
                        setOpen(!open);
                        setUserOpen(false);
                    }}
                    className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-lg"
                >
                    <img src={open ? x : menu} className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-3">
                    <img src={logoDark} className="w-10 h-10" />
                    <div>
                        <h2 className="text-lg text-white font-bold">HelpDesk</h2>
                        <h3 className="text-xxs text-blue-base uppercase font-bold">Cliente</h3>
                    </div>
                </div>

                <button
                    onClick={() => {
                        setUserOpen(!userOpen);
                        setOpen(false);
                    }}
                    className="text-sm text-gray-50 bg-blue-600 p-2 rounded-full"
                >
                    UC
                </button>
            </nav>

            
            {open && (
                <div className="bg-[#15161A] mx-4 mt-3 p-6 rounded-2xl shadow-xl animate-fadeIn md:hidden">
                    <p className="text-gray-400 text-xs mb-4 tracking-wide">MENU</p>

                    <a
                        href="/"
                        className="bg-[#3948D6] text-white flex items-center gap-3 p-4 rounded-lg mb-3"
                    >
                        <img src={clipBoard} className="w-6 h-6" />
                        Meus chamados
                    </a>

                    <a
                        href="/newcall"
                        className="text-gray-300 flex items-center gap-3 p-4 rounded-lg hover:bg-gray-800 transition"
                    >
                        <img src={plus} className="w-6 h-6" />
                        Criar chamado
                    </a>
                </div>
            )}

            
            {userOpen && (
                <div className="bg-[#15161A] mx-4 mt-3 p-6 rounded-2xl shadow-xl animate-fadeIn md:hidden">
                    <p className="text-gray-400 text-xs mb-4 tracking-wide">PERFIL</p>

                    <button
                        onClick={() => {
                            setPerfilOpen(true);
                            setUserOpen(false);
                        }}
                        className="text-white flex items-center gap-3 p-4 rounded-lg hover:bg-gray-800 transition w-full text-left"
                    >
                        <img src={circleUser} className="w-6 h-6" />
                        Perfil
                    </button>

                    <a
                        href="/logout"
                        className="text-[#D03E3E] flex items-center gap-3 p-4 rounded-lg hover:bg-gray-800 transition"
                    >
                        <img src={logOut} className="w-6 h-6" />
                        Sair
                    </a>
                </div>
            )}

            
            <ModalPerfil open={perfilOpen} onClose={() => setPerfilOpen(false)} />

            <Outlet />
        </div>
    );
}
