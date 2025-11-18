import { X } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";

interface ModalPerfilProps {
    open: boolean;
    onClose: () => void;
}

export function ModalPerfil({ open, onClose }: ModalPerfilProps) {
    if (!open) return null;

    const [name, setName] = useState("Paullo Roberto")
    const [email, setEmail] = useState("paulloroberto63@hotmail.com");
    const [password, setPassword] = useState("12345");

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
            <div className="bg-white w-[480px] rounded-2xl shadow-xl p-8 animate-fadeIn">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Perfil</h2>

                    <button onClick={onClose}>
                        <X size={22} className="text-gray-700" />
                    </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <img
                        src="https://i.pravatar.cc/100?img=12"
                        className="w-16 h-16 rounded-full object-cover"
                    />

                    <div className="flex flex-col gap-2">
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                            ⬆ Nova imagem
                        </button>

                        <button className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm">
                            🗑 Remover
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <Input
                     required
                    legend="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <Input
                    required
                    value={email}
                    type="email"
                    legend="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-3">
                     <Input
                    required
                    value={password}
                    type="password"
                    legend="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                        <button className="px-4 py-[6px] bg-gray-400 rounded-lg text-sm text-gray-200 font-bold">
                            Alterar
                        </button>
                    </div>
                </div>

                <Button>Salvar</Button>
            </div>
        </div>
    );
}
