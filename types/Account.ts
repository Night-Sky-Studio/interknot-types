import { type ProfileInfo } from "./Profile"

export enum AuthProvider {
    Discord = "discord",
    Patreon = "patreon"
}

export interface Account {
    Id: number
    Username: string
    ProfilePictureUrl: string
    Email: string
    PatreonStatus?: boolean
    EnkaPatreonStatus?: boolean
    ClaimedProfiles: ProfileInfo[]
    Provider: AuthProvider
    LinkedAccount?: Account
}