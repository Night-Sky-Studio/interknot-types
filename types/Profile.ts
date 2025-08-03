import type { Character } from "./Character"
import { BaseLeaderboardEntry } from "./Leaderboard"
import type { Medal } from "./Medal"
import type { Title } from "./Title"

export enum MainCharacter {
    "Wise" = 2011,
    "Belle" = 2021
}
export interface ProfileInfo {
    Uid: number
    Nickname: string
    Description: string
    MainCharacter: MainCharacter
    Level: number
    Title: Title | null
    ProfilePictureUrl: string
    Platform: string
    NamecardUrl: string
    Medals: Medal[]
}

export interface Profile {
    Ttl: number
    Information: ProfileInfo
    Characters: Character[]
    Leaderboards: BaseLeaderboardEntry[]
}