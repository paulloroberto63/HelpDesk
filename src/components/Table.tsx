import circleHelp from "../assets/circle-help.svg"
import eye from "../assets/eye.svg"
import clock from "../assets/clock-2.svg"
import circleCheck from "../assets/circle-check-big.svg"

export function Table() {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-500 mt-10">
            <table className="w-full table-auto text-sm">
                <thead className="text-gray-400">
                <tr>
                    <th className="p-3 text-left">Atualizado</th>
                    <th className="p-3 text-left max-md:hidden">Id</th>
                    <th className="p-3 text-left">Título</th>
                    <th className="p-3 text-left max-md:hidden">Serviço</th>
                    <th className="p-3 text-left max-md:hidden">Valor total</th>
                    <th className="p-3 text-left max-md:hidden">Técnico</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-center"></th>
                </tr>
                </thead>

                <tbody>

                <tr className="hover:bg-gray-500 border border-gray-500">
                    <td className="p-3">13/04/25 20:56</td>
                    <td className="p-3 max-md:hidden">00003</td>
                    <td className="p-3">Rede lenta</td>
                    <td className="p-3 max-md:hidden">Instalação de Rede</td>
                    <td className="p-3 max-md:hidden">R$ 180,00</td>
                    <td className="p-3 max-md:hidden">Carlos Silva</td>
                    <td className="p-3">
                        <img className="bg-[#f3d6df] p-1.5 rounded-full" src={circleHelp}/>
                    </td>

                    
                    <td className="p-3 min-w-[48px] shrink-0">
                        <a href="/details" className="flex items-center justify-center">
                            <img
                                src={eye}
                                className="w-6 h-6 shrink-0 p-1.5 rounded-lg bg-gray-400 cursor-pointer"
                            />
                        </a>
                    </td>
                </tr>

        
                <tr className="hover:bg-gray-500 border border-gray-500">
                    <td className="p-3">12/04/25 15:20</td>
                    <td className="p-3 max-md:hidden">00004</td>
                    <td className="p-3">Backup não está funcionando</td>
                    <td className="p-3 max-md:hidden">Recuperação de Dados</td>
                    <td className="p-3 max-md:hidden">R$ 200,00</td>
                    <td className="p-3 max-md:hidden">Carlos Silva</td>
                    <td className="p-3">
                        <img className="bg-[#f3d6df] p-1.5 rounded-full" src={circleHelp}/>
                    </td>
                    <td className="p-3 min-w-[48px] shrink-0">
                        <a href="/details" className="flex items-center justify-center">
                            <img src={eye}
                                 className="w-6 h-6 shrink-0 p-1.5 rounded-lg bg-gray-400 cursor-pointer"/>
                        </a>
                    </td>
                </tr>

                <tr className="hover:bg-gray-500 border border-gray-500">
                    <td className="p-3">12/04/25 09:01</td>
                    <td className="p-3 max-md:hidden">00001</td>
                    <td className="p-3">Computador não liga</td>
                    <td className="p-3 max-md:hidden">Manutenção de Hardware</td>
                    <td className="p-3 max-md:hidden">R$ 150,00</td>
                    <td className="p-3 max-md:hidden">Carlos Silva</td>
                    <td className="p-3">
                        <img className="bg-[#a1b6ec] p-1.5 rounded-full" src={clock}/>
                    </td>
                    <td className="p-3 min-w-[48px] shrink-0">
                        <a href="/details" className="flex items-center justify-center">
                            <img src={eye}
                                 className="w-6 h-6 shrink-0 p-1.5 rounded-lg bg-gray-400 cursor-pointer"/>
                        </a>
                    </td>
                </tr>

                <tr className="hover:bg-gray-500 border border-gray-500">
                    <td className="p-3">12/04/25 10:15</td>
                    <td className="p-3 max-md:hidden">00002</td>
                    <td className="p-3">Instalação de software de gestão</td>
                    <td className="p-3 max-md:hidden">Suporte de Software</td>
                    <td className="p-3 max-md:hidden">R$ 200,00</td>
                    <td className="p-3 max-md:hidden">Ana Oliveira</td>
                    <td className="p-3">
                        <img className="bg-[#ccf1b1] p-1.5 rounded-full" src={circleCheck}/>
                    </td>
                    <td className="p-3 min-w-[48px] shrink-0">
                        <a href="/details" className="flex items-center justify-center">
                            <img src={eye}
                                 className="w-6 h-6 shrink-0 p-1.5 rounded-lg bg-gray-400 cursor-pointer"/>
                        </a>
                    </td>
                </tr>

                <tr className="hover:bg-gray-500 border border-gray-500">
                    <td className="p-3">11/04/25 15:16</td>
                    <td className="p-3 max-md:hidden">00005</td>
                    <td className="p-3">Meu fone não conecta no computador</td>
                    <td className="p-3 max-md:hidden">Suporte de Software</td>
                    <td className="p-3 max-md:hidden">R$ 80,00</td>
                    <td className="p-3 max-md:hidden">Ana Oliveira</td>
                    <td className="p-3">
                        <img className="bg-[#ccf1b1] p-1.5 rounded-full" src={circleCheck}/>
                    </td>
                    <td className="p-3 min-w-[48px] shrink-0">
                        <a href="/details" className="flex items-center justify-center">
                            <img src={eye}
                                 className="w-6 h-6 shrink-0 p-1.5 rounded-lg bg-gray-400 cursor-pointer"/>
                        </a>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}
