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

export function formatDate(locale: string, date: Date): string {
    if (date.getUTCDate() == new Date().getUTCDate())
        return date.toLocaleTimeString(locale, {hour: '2-digit', minute: '2-digit'})
    else
        return date.toLocaleDateString(locale, {hour: '2-digit', minute: '2-digit'})
}
