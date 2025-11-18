export const CATEGORIES = {
    network: {
        name: "Instalação de Rede",
        
    },
     data: {
        name: "Recuperação de Dados",
        
    },
     Hardware: {
        name: "Manutenção de Hardware",
       
    },
     Software: {
        name: "Suporte de Software"
        
    }
}


export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>