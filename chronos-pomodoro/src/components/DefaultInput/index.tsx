type DefaultInputProps = {
    id: string;
    label?: string;
} & React.ComponentProps<'input'>

export function DefaultInput({id, label, type, ...rest}: DefaultInputProps) {
    return(
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} type={type} {...rest}/>
        </>)
}