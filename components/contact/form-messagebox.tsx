import {fieldClass} from "@/components/contact/form-input";

interface FormMessageBoxProps {
    fieldName: string,
    name: string,
    placeholder: string,
    required?: boolean
}

export default function FormMessageBox({fieldName, name, placeholder, required = false}: FormMessageBoxProps){
    return (
        <label className="flex flex-col gap-y-2">
            <span className="text-primary">{fieldName}{required && "*"}</span>
            <textarea
                name={name}
                required={required}
                className={`${fieldClass} h-40 resize-y`}
                placeholder={placeholder}
            />
        </label>
    )
}
