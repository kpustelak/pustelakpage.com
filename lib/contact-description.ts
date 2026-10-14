
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
    title : "Lorem ipsum sit amet",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis augue quis imperdiet posuere." +
        "Fusce ut elit malesuada, ornare lorem non, lacinia mi. Etiam at urna ex.",
    textDescription : [
        {
            title : "Lorem ipsum dolor",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus neque sit amet " +
                "aliquam consectetur. Nunc consectetur suscipit magna, commodo faucibus ante gravida non. Etiam cursus " +
                "suscipit ante, id ultricies nulla condimentum sit amet. Suspendisse laoreet tortor nec sapien placerat," +
                "non faucibus tellus vulputate."
        },
        {
            title : "Lorem ipsum dolor",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus neque sit amet " +
                "aliquam consectetur. Nunc consectetur suscipit magna, commodo faucibus ante gravida non. Etiam cursus " +
                "suscipit ante, id ultricies nulla condimentum sit amet. Suspendisse laoreet tortor nec sapien placerat," +
                "non faucibus tellus vulputate."
        }

        ]
}