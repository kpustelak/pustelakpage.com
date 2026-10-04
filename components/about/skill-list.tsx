interface SkillListProps {
    names: string[];
}
export default function SkillList({ names }: SkillListProps) {
    return (
        <ul className="flex flex-wrap gap-x-5 gap-y-3 font-medium uppercase">
            {names.map((name, index) => (
                <li key={`${name}-${index}`} className="flex items-center gap-x-5 whitespace-nowrap">
                    {index > 0 && <span aria-hidden="true">·</span>}
                    {name}
                </li>
            ))}
        </ul>
    );
}