import { type ProfileInfo } from "./Profile"

export enum AuthProvider {
    Discord = "discord",
    Patreon = "patreon"
}

export enum AccountLevel {
    Regular = 0,

    PastSupporter,

    CertifiedProxy,
    SeniorProxy,
    EliteProxy,
    LegendaryProxy,

    DiscordServerBooster,
    
    EnkaSupporter,

    Admin
}

export interface Account {
    Id: number
    Username: string
    ProfilePictureUrl: string
    Email: string
    AccountLevel: AccountLevel
    ClaimedProfiles: ProfileInfo[]
    Provider: AuthProvider
    LinkedAccount?: Account
}