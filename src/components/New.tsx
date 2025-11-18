import { Input } from "./Input"
import { useState } from "react"
import { TextArea } from "./TextArea"
import { Select } from "./Select"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"
import { Button } from "./Button"



export function New(){
    const [ title, setTitle ] = useState("")
    const [ description, setDescription] = useState("")
    const [category, setCategory] = useState("")
     
    function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Enviado");
    console.log(title, description, category);
  }
    
    return (
        <form onSubmit={onSubmit} className="flex max-md:flex-col mt-4 w-full gap-4">
            <div className="p-6 border border-gray-500 rounded-2xl">
             <h2 className="text-gray-200 font-bold text-2xl">Informações</h2>
             <p className="text-gray-400 text-sm mb-3">Configure os dias e horários em que você está disponível para atender chamados</p>
             <Input
        required
        legend="Título"
        placeholder="Digite um Título para o chamado"
        onChange={(e) => setTitle(e.target.value)}
         />
         <TextArea
         required
         legend="Descrição"
         placeholder="Descreva o que está acontecendo"
         onChange={(e) => setDescription(e.target.value)}
         />
         <Select
           required
           legend="Categoria de serviço"
           value={category}
           onChange={(e) => setCategory(e.target.value)}
>
        {CATEGORIES_KEYS.map((c) => (
        <option key={c} value={c}>
        {CATEGORIES[c].name}
         </option>
     ))}
</Select>
    </div>
       <div className="p-6 border border-gray-500 rounded-2xl">
            <h2 className="text-gray-200 font-bold text-2xl">Resumo</h2>
             <p className="text-gray-400 text-sm mb-3">Valores e detalhes</p>
        <div className="flex flex-col gap-5">
             <h3 className="text-base text-gray-400">Categoria de serviço</h3>
              <h4 className="text-lg text-gray-200 font-semibold">Erro de rede</h4>
             <h3 className="text-base text-gray-400">Custo Inicial</h3>
             <h4 className="text-lg text-gray-200 font-bold">R$ 200,00</h4>
              <p className="text-sm text-gray-300 mt-5">O chamado será automaticamente atribuído a um técnico disponível</p>
        <Button type="submit">Criar chamado</Button>
        </div>
    </div>
</form>

    
      
    )
}