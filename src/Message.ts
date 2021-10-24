export default interface Messages {
    reference: string,
    messageContext: string,
    from: From,
    to: To,
    message: Message,
    groupings: Array<string>,
    time: string,
    timeUtc: string,
    channel: string
}

interface From {
    number: string,
    name: string
}

interface To {
    number: string
}

interface Message {
    text: string,
    media: Media
}

interface Media {
    mediaUri: string,
    contentType: string,
    title: string
}

interface Custom {

}
