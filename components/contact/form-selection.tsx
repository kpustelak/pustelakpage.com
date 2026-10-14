import {useState} from "react";

const roles = ["Backend Developer","Frontend Developer","Graphic Designer","WordPress Developer","Generative Developer","Internship","Other"]

export default function FormSelection({name}: {name: string}) {
    const [selected, setSelected] = useState<string[]>([])

    function toggle(role:string) {
        setSelected((current) =>
            current.includes(role) ? current.filter(v => v !== role) : [...current, role]
        )}

    return (
        <fieldset className="flex flex-col gap-y-3">
            <legend className="pb-3 text-primary">Pick role</legend>
            <input type="hidden" name={name} value={selected.join(", ")} />
            <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                    <button
                        key={role}
                        type="button"
                        aria-pressed={selected.includes(role)}
                        onClick={() => toggle(role)}
                        className={`border px-4 py-3 cursor-pointer transition-colors ${selected.includes(role)
                            ? "border-primary bg-primary text-background"
                            : "border-primary-20 text-primary hover:border-primary"}`}
                    >
                        {role}
                    </button>
                ))}
            </div>
        </fieldset>
    )
}
