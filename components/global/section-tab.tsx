import {ReactNode} from "react";

interface SectionTabProps {
    title: string;
    children: ReactNode;
    fullWidth?: boolean;
}
export default function SectionTab({title, children, fullWidth}: SectionTabProps) {
    return (
            <div className="flex flex-col gap-y-6 md:flex-row">
                <div className="md:w-1/5 md:shrink-0">
                    <p className="label">{title}</p>
                </div>
                <div className={`${fullWidth ? "md:w-4/5" : "md:w-3/5"} flex min-w-0 flex-col gap-y-10`}>
                    {children}
                </div>
            </div>
    )
}
