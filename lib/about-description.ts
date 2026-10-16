
type JobList = {
    name: string,
    description: string
}

export type AboutDescription = {
    title : string,
    description : string,
    skillList : string[]
    jobList : JobList[]
}

export const about : AboutDescription = {
    title: "Student developer focused on building reliable and complex software",
    description: "Building portfolio projects is a loop I want to break out of. I'm looking for an opportunity to work with real code and solve real problems. So far I have gained experience at two companies as a WordPress developer, and now I would be glad to take on a proper programming job.",
    skillList: ["WooCommerce", "Tailwind CSS", "React", "MVC", "Web API", "Divi", "Figma", "Entity Framework Core", ".NET Core",
        "PostgreSQL", "C#", "Swagger", "AutoMapper", "SOLID", "CQRS", "xUnit"],
    jobList : [
        {
            name : "ARKWEB / SPARK OF GENIUS",
            description : "Working as a WordPress developer: building creative websites on all kinds of topics, setting up online shops with WooCommerce and writing my own plugins."
        },
        {
            name : "ZETO RZESZÓW",
            description : ".NET internship where I worked with C# and ASP.NET Core in a professional environment. I learned how a real development team operates, from code reviews and version control to working with an existing codebase."
        },
    ]
}