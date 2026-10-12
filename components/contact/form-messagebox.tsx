
interface formMessageBoxProps{
    fieldName:string,
    fieldData: (value:string) => void,
    placeholder:string
}

export default function FormMessageBox({fieldName, fieldData, placeholder}: formMessageBoxProps){
    return (
        <div>
            <p className="text-primary">{fieldName}</p>
            <textarea
                className="w-full h-40 border border-primary-20 bg-transparent px-4 py-3 text-primary
                    outline-none placeholder:text-primary-40"
                placeholder={placeholder}
                onChange={(event) => fieldData(event.target.value)}>
            </textarea>
        </div>
    )
}