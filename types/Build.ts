import { type Character } from "./Character"
import { type ProfileInfo } from "./Profile"

export interface Transform {
    X: number
    Y: number
    ScaleX: number
    ScaleY: number
    Rotation: number
}

export interface CardCustomization {
    CharacterImageUrl?: string
    BackgroundImageUrl?: string
    CharacterTransform?: Transform
    BackgroundTransform?: Transform
}

export interface Build {
    Id: number
    Name?: string
    Owner?: ProfileInfo
    Character: Character
    CardCustomization?: CardCustomization
    ActiveLeaderboardId?: number
    IsPublic: boolean
    IsBanned: boolean
}