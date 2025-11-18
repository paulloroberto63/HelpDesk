import { Table } from "../components/Table"



export function HelpDesk() {
    return (
        <div className="bg-gray-50 w-screen h-screen rounded-2xl">
          <main className="flex flex-col p-7">
           <h1 className="text-2xl text-blue-900 font-bold">Meus Chamados</h1>
           <Table />
          </main>
       </div>
    )
}