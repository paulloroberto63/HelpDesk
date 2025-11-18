import circleHelp from "../assets/circle-help.svg"

export function DetailedCall(){
    return (
        <div className="flex max-md:flex-col mt-4 w-full gap-4">
            <div className="p-6 border border-gray-500 rounded-2xl">
         <header className="flex items-center justify-between">
              <span className="text-xs text-gray-300">00004</span>
              <img className="bg-[#f3d6df] p-1.5 rounded-full" src={circleHelp}/>
         </header>
         <h2 className="text-lg text-gray-100 font-bold">Backup não está funcionando</h2>
            <h3 className="text-xs text-gray-400 mt-5 font-bold">Descrição</h3>
             <p className="text-sm text-gray-100">O sistema de backup automático parou de funcionar. Última execução bem-sucedida foi há uma semana.</p>
         <h3 className="text-xs text-gray-400 mt-5 font-bold">Categoria</h3>
             <p className="text-sm text-gray-100">Recuperação de Dados</p>
         <div className="flex justify-around md:mt-10">
             <div>
                  <h3 className="text-xs text-gray-400 mt-5 font-bold">Criado em</h3>
                  <p className="text-sm text-gray-100">12/04/25 09:12</p>
             </div>
          <div>
              <h3 className="text-xs text-gray-400 mt-5 font-bold">Atualizado em</h3>
              <p className="text-sm text-gray-100">12/04/25 15:20</p>
        </div>
    </div>
  </div>
       <div className="p-6 border border-gray-500 rounded-2xl">
        <h3 className="text-xs text-gray-400 mt-5 font-bold">Técnico responsável</h3>
        <p className="text-sm text-gray-200 font-bold mt-2.5">Carlos Silva</p>
        <h3 className="text-xs text-gray-400">carlos.silva@test.com</h3>
        <h4 className="text-gray-400 text-xs mt-8">Valores</h4>
        <div className="flex justify-between">
            <p className="text-sm text-gray-200">Preço base</p>
            <p className="text-sm text-gray-200">R$ 200,00</p>
        </div>
         <h4 className="text-gray-400 text-xs mt-8">Adicionais</h4>
         <div className="flex justify-between">
            <p className="text-sm text-gray-200">Assinatura de backup</p>
            <p className="text-sm text-gray-200">R$ 120,00</p>
        </div>
         <div className="flex justify-between">
            <p className="text-sm text-gray-200">Formatação do PC</p>
            <p className="text-sm text-gray-200">R$ 75,00</p>
        </div>
        <div className="flex justify-between mt-7">
            <p className="text-sm text-gray-200 font-bold">Total</p>
            <p className="text-sm text-gray-200 font-bold">R$ 395,00</p>
        </div>
    </div>
</div>
    
      
    )
}