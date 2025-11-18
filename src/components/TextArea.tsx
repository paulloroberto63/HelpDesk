type Props = React.ComponentProps<"textarea"> & {
    legend?: string
}


export function TextArea({ legend, cols = 10, ...rest }: Props) {
    return (
        <fieldset className="flex flex-1 h-50 text-gray-300 font-bold focus-within:text-blue-500">
            {legend && <legend className="uppercase mb-2">{legend}</legend>}

            <textarea
                cols={cols}
                className="w-full border-b border-gray-500 focus:outline-none
                focus:border-b-blue-500 p-2 bg-transparent"
                {...rest}
            />
        </fieldset>
    )
}
