export interface BelleUser {
    Id: string
    Username: string
    GlobalName?: string
    Avatar?: string
}

export interface BelleAttachment {
    Id: string
    Name: string
    Url: string
    ContentType?: string
    Height?: number
    Width?: number
}

export interface BelleMessage {
    Id: string
    CreatedAt: Date
    Author: BelleUser
    Content: string
    CleanContent: string
    Attachments: BelleAttachment[]
}