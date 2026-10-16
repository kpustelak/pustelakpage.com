
type TextDescription = {
    title: string,
    description: string,
}

export type ContactDescription = {
    title: string,
    description: string,
    textDescription: TextDescription[]
}

export const contactDescription : ContactDescription = {
    title : "Get in touch",
    description : "If you have made it this far, I'm curious what you think about this portfolio. Even if you are not looking to hire, I'm always happy to hear your opinion about this page and my projects.",
    textDescription : [
        {
            title : "But what are you looking for?",
            description : "I'm looking for a job or an internship that can lead to employment. Building portfolio projects over and over gets repetitive, and I want the opportunity to put my skills to work in a real job."
        },
        {
            title : "Where can you reach me?",
            description : "Through this contact form, my LinkedIn account, or just send me an email. I check my inbox daily, so I won't miss your message!"
        }

        ]
}