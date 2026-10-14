import {HTMLInputTypeAttribute} from "react";

interface FormInputProps {
    fieldName: string,
    name: string,
    placeholder: string,
    type?: HTMLInputTypeAttribute,
    required?: boolean,
    autoComplete?: string
}

export const fieldClass = "w-full border border-primary-20 bg-transparent px-4 py-3 text-primary transition-colors " +
    "placeholder:text-primary-40 focus:border-primary focus-visible:outline-none"

export default function FormInput({fieldName, name, placeholder, type = "text", required = false, autoComplete}: FormInputProps){
    return(
        <label className="flex flex-col gap-y-2">
            <span className="text-primary">{fieldName}{required && "*"}</span>
            <input
                name={name}
                type={type}
                required={required}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className={fieldClass}
            />
        </label>
    )
}
