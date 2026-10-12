
interface formInputProps{
    fieldName:string,
    fieldData: (value:string) => void
}

export default function FormInput({fieldName, fieldData}: formInputProps){
    return(
        <div>
            <p>{fieldName}*</p>
            <input onChange={(x) => { fieldData(x.target.value); }}/>
        </div>
    )
}