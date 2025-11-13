type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
}

export function Button({ children, isLoading, type = "button", ...rest}: Props) {
    return (
    <button 
    type={type} 
    disabled={isLoading} {...rest}
    className="flex items-center justify-center bg-gray-200 
    text-gray-600 rounded-lg cursor-pointer hover:bg-gray-100 
    transition ease-linear h-12 disabled:opacity-50
    disabled:cursor-progress">
      {children}
    </button>
    )
}