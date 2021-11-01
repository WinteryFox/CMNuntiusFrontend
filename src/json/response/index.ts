export interface ServerSentEvent {
    type: string,
    payload: any
}

export interface StatusReport {
    code: number,
    status: string,
    reference: string,
    to: string
}

export interface MessageCreateResponse {
    to: string,
    status: string,
    reference?: string,
    parts: number,
    messageDetails?: string,
    messageErrorCode: number
}

export interface MtCreateResponse {
    details: string,
    errorCode: number,
    messages: Array<MessageCreateResponse>
}

export function formatDate(date: Date): string {
    if (date.getUTCDate() == new Date().getUTCDate())
        return date.toLocaleTimeString()
    else
        return date.toLocaleString()
}
