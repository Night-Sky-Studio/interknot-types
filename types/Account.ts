import { ProfileInfo } from "./Profile"

export interface Account {
    Id: number
    Username: string
    ProfilePictureUrl: string
    Email: string
    PatreonStatus?: boolean
    EnkaPatreonStatus?: boolean
    ClaimedProfiles: ProfileInfo[]
    ActiveType: "discord" | "patreon"
    LinkedAccount?: Account
}