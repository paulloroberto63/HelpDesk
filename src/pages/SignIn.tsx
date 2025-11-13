import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignIn() {
    return (
        <form className="w-full flex flex-col gap-10 mt-8 border border-gray-500 rounded-xl p-7" >
           <div>
           <h2 className="text-2xl font-bold text-gray-200">Acesse o Portal</h2>
           <p className= "text-gray-300 pt-1">Entre usando seu e-mail e senha cadastrados</p>
           </div>
           <Input 
           required
           type="E-mail"
           legend="E-mail"
           placeholder="Exemplo@mail.com"/>

           <Input 
           required
           type="password"
           legend="Senha"
           placeholder="Digite sua senha"/>

           <Button>Entrar</Button>
           
        </form>
    )
}