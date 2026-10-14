import {email, github, linkedin} from "@/lib/contact-details";

const pages = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
]

const linkClass = "text-sm text-primary transition-opacity hover:opacity-60"

export default function Footer() {
    return (
        <footer id="footer" className="relative z-40 flex h-svh flex-col overflow-hidden bg-background px-(--gutter-x) pt-16 md:pt-24">
            <div className="grid grid-cols-2 items-start gap-8 md:flex md:justify-between">
                <a href={`mailto:${email}`} className={`${linkClass} break-all`}>
                    {email}
                </a>
                <p className="text-sm text-primary">
                    © {new Date().getFullYear()}
                    <br />
                    Kornel Pustelak
                </p>
                <ul className="flex flex-col gap-2">
                    <li>
                        <a href={github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            LinkedIn
                        </a>
                    </li>
                </ul>
                <nav aria-label="Footer">
                    <ul className="flex flex-col gap-2">
                        {pages.map(({ href, label }) => (
                            <li key={href}>
                                <a href={href} className={linkClass}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="mt-auto translate-y-[14%] text-center leading-[0.78] font-sans font-semibold tracking-[-0.05em] text-primary uppercase" aria-hidden>
                <p className="text-[24vw]">Kornel</p>
                <p className="text-[18.9vw]">Pustelak</p>
            </div>
        </footer>
    )
}
