import {JSX} from "react";

interface SectionTabProps {
    title: string;
    children: React.ReactNode;
    fullWidth?: boolean;
}
export default function SectionTab({title, children, fullWidth}: SectionTabProps): JSX.Element {
    return (
            <div className="flex">
                <div className="w-1/5">
                    <p className="uppercase">{title}</p>
                </div>
                <div className={`${fullWidth ? "w-4/5" : "w-3/5"} flex flex-col gap-y-10`}>
                    {children}
                </div>
            </div>
    )
}