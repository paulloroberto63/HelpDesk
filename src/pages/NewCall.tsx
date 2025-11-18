import { New } from "../components/New"


export function NewCall(){
    
    
    return (
         <div className="bg-gray-50 w-screen h-screen rounded-2xl flex justify-center">
                          <main className="flex flex-col p-7">
                           <h1 className="text-2xl text-blue-900 font-bold mt-2">Novo chamado</h1>
                           <New />
                           </main>
                           
                        </div>
    )
}