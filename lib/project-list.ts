import mvcBlogApp from "@/public/wide-images/mvc-blog-app.webp";
import mvcBlogAppPortrait from "@/public/high-images/mvc-blog-app-portrait.webp";
import mvcBlogAppLeft from "@/public/high-images/mvc-blog-app-left.webp";
import browserFile from "@/public/wide-images/browser-file.webp";
import browserFilePortrait from "@/public/high-images/browser-file-portrait.webp";
import browserFileLeft from "@/public/high-images/browser-file-left.webp";
import linkShortener from "@/public/wide-images/link-shortener.webp";
import linkShortenerMobile from "@/public/high-images/link-shortener-mobile.webp";
import linkShortenerForm from "@/public/high-images/link-shortener-form.webp";
import {Project} from "@/lib/project-description";

export type {Project} from "@/lib/project-description";

export const projects: Project[] = [
    {
        slug: "mvc-blog-app",
        name: "MVC Blog App",
        image: mvcBlogAppPortrait,
        details: [
            {title: "Client", description: "Personal project"},
            {title: "Year", description: "2025 – 2026"},
            {title: "Role", description: "Full-stack development"},
            {title: "Source", description: "GitHub ↗", href: "https://github.com/kpustelak/MVCBlogApp"},
        ],
        heroImage: mvcBlogApp,
        info: {
            title: "A blog engine built from scratch",
            description: "A complete blogging platform written in ASP.NET Core MVC. Readers can browse posts, " +
                "filter them by category, search by title and page through the newest entries. Behind a login sits an " +
                "admin panel for writing, editing and publishing posts, managing categories and keeping an image " +
                "library. The project taught me how to keep an MVC app tidy: thin controllers, logic in services " +
                "behind interfaces, and DTOs between the database and the views.",
            technologies: [".NET 8", "ASP.NET Core MVC", "Entity Framework Core", "ASP.NET Core Identity",
                "AutoMapper", "Serilog", "PostgreSQL", "SQLite"],
        },
        gallery: [mvcBlogAppPortrait, mvcBlogAppLeft],
        highlights: [
            {
                title: "Secured admin panel",
                description: "Authentication with ASP.NET Core Identity: strong passwords of at least 20 characters, " +
                    "a 30-minute lockout after 5 failed attempts, sliding cookie sessions and antiforgery tokens " +
                    "checked on every form.",
            },
            {
                title: "Central error handling",
                description: "One exception filter for the whole app. Small errors like validation problems send " +
                    "the user back with a readable message, while serious ones are logged with Serilog and lead " +
                    "to an error page.",
            },
            {
                title: "Image library",
                description: "Uploads are checked for type and size (max 5MB) and saved under unique GUID names. " +
                    "Alt texts can be edited later, and deleting a file is guarded so it can never touch anything " +
                    "outside the uploads folder.",
            },
            {
                title: "One codebase, two databases",
                description: "SQLite for quick local development and PostgreSQL in production, both through " +
                    "EF Core migrations. On startup a seeder creates the admin account from configuration.",
            },
        ],
    },
    {
        slug: "browser-file",
        name: "BrowserFile",
        image: browserFilePortrait,
        details: [
            {title: "Client", description: "Personal project"},
            {title: "Year", description: "2025"},
            {title: "Role", description: "Full-stack development"},
            {title: "Source", description: "GitHub ↗", href: "https://github.com/kpustelak/BrowserFile"},
        ],
        heroImage: browserFile,
        info: {
            title: "My own cloud drive in the browser",
            description: "A self-hosted file storage app written in ASP.NET Core MVC. After logging in you can " +
                "upload files, sort them into folders with their own icons, tags and descriptions, star the important " +
                "ones and move or delete many at once. Any file can be shared with a public link that expires on " +
                "time, works only once or asks for a password, so sending something to a friend doesn't mean " +
                "leaving it online forever.",
            technologies: [".NET 8", "ASP.NET Core MVC", "Entity Framework Core", "ASP.NET Core Identity",
                "AutoMapper", "Serilog", "SQLite", "Scrypt"],
        },
        gallery: [browserFilePortrait, browserFileLeft],
        highlights: [
            {
                title: "Controlled sharing",
                description: "Every share link gets a random token and an expiry date. It can be one-time only, " +
                    "protected with a password hashed with Scrypt, and turned off by hand at any moment. Each file " +
                    "keeps a history of its last links.",
            },
            {
                title: "Files stay private",
                description: "Every query checks who owns the file or folder, so users only ever see their own " +
                    "data. Files are saved on disk under generated IDs in a separate folder per user.",
            },
            {
                title: "Safe downloads",
                description: "Public downloads only serve files from inside the uploads folder, which blocks path " +
                    "traversal tricks. Executable file types like .exe or .bat can't be uploaded at all.",
            },
            {
                title: "Logged activity",
                description: "Serilog writes daily log files with every upload, move and delete. Wrong passwords " +
                    "on shared links and downloads are logged with the visitor's IP address.",
            },
        ],
    },
    {
        slug: "link-shortener",
        name: "Link Shortener",
        image: linkShortenerMobile,
        details: [
            {title: "Client", description: "Personal project"},
            {title: "Year", description: "2026"},
            {title: "Role", description: "Full-stack development"},
            {title: "Source", description: "GitHub ↗", href: "https://github.com/kpustelak/link-shortener"},
        ],
        heroImage: linkShortener,
        info: {
            title: "Short links that clean up after themselves",
            description: "A link shortener with a .NET Minimal API backend and a React frontend. You pick your own " +
                "short name for a long URL and can protect it with a password. Links live in Redis and disappear " +
                "on their own after 24 hours, so there is nothing to clean up later. Only the owner can create " +
                "new links, while anyone with the short link can open it.",
            technologies: [".NET 10", "Minimal API", "Redis", "React", "Vite", "Tailwind CSS", "xUnit",
                "Moq", "Docker"],
        },
        gallery: [linkShortenerMobile, linkShortenerForm],
        highlights: [
            {
                title: "Redis as storage",
                description: "Every link is a single Redis key with a 24-hour expiry. No database, no cleanup jobs: " +
                    "expired links are removed by Redis itself.",
            },
            {
                title: "Password-protected links",
                description: "Passwords are hashed with PBKDF2 (SHA-256, random salt, 500,000 iterations) and " +
                    "compared in constant time. The frontend first asks if a link needs a password and only " +
                    "then shows the password field.",
            },
            {
                title: "Tested against real Redis",
                description: "Tests in xUnit and Moq, including integration tests that run against a real Redis " +
                    "instance in Docker, so the code is checked against the same database it uses in production.",
            },
            {
                title: "Lightweight API",
                description: "Three endpoints written as .NET Minimal API: create a link, check if it exists, and " +
                    "get the original URL. Every response uses one shared format with a status, message and errors.",
            },
        ],
    },
];

export function getProject(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

export function getNextProject(slug: string): Project {
    const index = projects.findIndex(project => project.slug === slug);
    return projects[(index + 1) % projects.length];
}
