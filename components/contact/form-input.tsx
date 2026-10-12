
interface formInputProps{
    fieldName:string,
    fieldData: (value:string) => void,
    placeholder:string
}

export default function FormInput({fieldName, fieldData, placeholder}: formInputProps){
    return(
        <div>
            <p className="text-primary">{fieldName}*</p>
            <input
                placeholder={placeholder}
                className="w-full border border-primary-20 bg-transparent px-4 py-3 text-primary
                outline-none placeholder:text-primary-40"
                onChange={(event) => fieldData(event.target.value)}
            />
        </div>
    )
}