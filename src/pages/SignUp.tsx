import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Enviado");
    console.log(name,email,password);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="
        w-full max-w-[430px]
        flex flex-col gap-10 
        mt-10 
        border border-gray-500 
        rounded-xl 
        p-7 lg:p-10
        bg-white
      "
    >

      <div>
        <h2 className="text-2xl font-bold text-gray-800">Crie sua Conta</h2>
        <p className="text-sm text-gray-400 mt-1">
          Informe seu nome, email e senha
        </p>
      </div>

      <Input
        required
        legend="Nome"
        placeholder="Digite o nome completo"
        onChange={(e) => setName(e.target.value)}
      />


      <Input
        required
        type="email"
        legend="E-mail"
        placeholder="exemplo@mail.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        type="password"
        legend="Senha"
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />

      
      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      
      <div
        className=" 
          p-6 
          flex flex-col gap-2
          mt-5
        "
      >
        <h3 className="text-lg font-bold text-gray-800">
          Já uma conta?
        </h3>
        <p className="text-sm text-gray-400">Entre agora mesmo</p>

        <a href="/" className="w-full p-4 bg-gray-500 text-gray-200 font-bold flex items-center justify-center rounded-lg mt-3 hover:bg-gray-400 transition ease-linear">Acessar conta</a>
      </div>
    </form>
  );
}
