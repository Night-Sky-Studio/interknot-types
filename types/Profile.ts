import type { Character } from "./Character"
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
    Title: Title
    ProfilePictureUrl: string
    Platform: string
    NamecardUrl: string
    Medals: Medal[]
}

export interface Profile {
    Information: ProfileInfo
    Characters: Character[]
}