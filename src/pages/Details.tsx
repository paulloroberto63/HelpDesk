import arrowLeft from "../assets/arrow-left.svg"
import { DetailedCall } from "../components/DetailedCall"
export function Details() {
    return (
        <div className="bg-gray-50 w-screen h-screen rounded-2xl">
                  <main className="flex flex-col p-7">
                    <a href="/" className="flex gap-1.5"><img src={arrowLeft} alt="icone de voltar" />
                      Voltar
                    </a>
                   <h1 className="text-2xl text-blue-900 font-bold mt-2">Chamado detalhado</h1>
                   <DetailedCall />
                   </main>
                </div>
    )
}