type Props = React.ComponentProps<"select"> & {
    legend?: string
}

export function Select({ legend, children, ...rest}: Props){
    return (
        <fieldset className="flex flex-1 max-h-20 text-gray-300 font-bold focus-within:text-blue-500">
            {legend && (
                <legend className="uppercase mb-2">
                {legend}
                </legend>
            )}

            <select
            className="w-full border-b border-gray-500 focus:outline-none 
            focus:border-b-blue-500 p-2 bg-transparent"
            {...rest} 
        >
         
         <option value="" disabled hidden>
            Selecione
         </option>
         
         {children}
        </select>
            
        </fieldset>
    )
}