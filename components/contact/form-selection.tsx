import {useState} from "react";

const roles = ["Backend Developer","Frontend Developer","Graphic Designer","WordPress Developer","Generative developer","Internship","Other"]

export default function FormSelection() {
    const [selected, setSelected] = useState<string[]>([])

    function toggle(role:string) {
        setSelected((current) =>
            current.includes(role) ? current.filter(v => v !== role) : [...current, role]
        )}

    return (
        <div className="py-6">
            <p className="text-primary">Pick role</p>
            <div className="flex flex-wrap gap-2 pt-3">
                {roles.map((role) => (
                    <button
                        key={role}
                        type="button"
                        onClick={() => toggle(role)}
                        className={`border px-4 py-3 cursor-pointer ${selected.includes(role)
                            ? "border-primary bg-primary text-black"
                            : "border-primary-20 text-primary"}}`}
                    >
                        {role}
                    </button>
                ))}
            </div>
        </div>
    )
}