
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
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum at tempor tincidunt. " +
        "In nec ipsum eget nunc bibendum dignissim. Quisque posuere scelerisque neque sit amet elementum.\n" +
        "Donec sodales molestie condimentum.",
    skillList: ["Product", "Product design", "Branding", "Web", "Product", "Product design", "Branding", "Web", "Product"],
    jobList : [
        {
            name : "Lorem ipsum",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum at tempor " +
                "tincidunt. In nec ipsum eget nunc bibendum dignissim. Quisque posuere scelerisque neque sit amet " +
                "elementum. Donec sodales molestie condimentum."
        },
        {
            name : "Lorem ipsum",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum at tempor " +
                "tincidunt. In nec ipsum eget nunc bibendum dignissim. Quisque posuere scelerisque neque sit amet " +
                "elementum. Donec sodales molestie condimentum."
        },
    ]
}