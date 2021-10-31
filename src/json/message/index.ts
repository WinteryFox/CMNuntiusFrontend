import {Channel} from "../../channel"

export interface MessageSnapshot {
    from: From,
    channel: Channel,
    lastMessage: string,
    date: Date
}

export interface MoMessage {
    reference: string,
    messageContext: string,
    from: From,
    to: To,
    message: Content,
    groupings: Array<string>,
    time: string,
    timeUtc: string,
    channel: string
}

export interface From {
    number: string,
    name: string
}

export interface To {
    number: string
}

export interface Content {
    text: string,
    media: Media
}

export interface Media {
    mediaUri: string,
    contentType: string,
    title: string
}

export interface Custom {

}