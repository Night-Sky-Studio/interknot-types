import type { BaseAvatar } from "./Avatar"
import { type Character } from "./Character"
import { type ProfileInfo } from "./Profile"

export interface Transform {
    X?: number
    Y?: number
    Scale?: number
    Flipped?: boolean
    Rotation?: number
}

export interface CardCustomization {
    CharacterImageUrl?: string
    BackgroundImageUrl?: string
    CharacterTransform?: Transform
    BackgroundTransform?: Transform
    AccentColor?: string
}

export interface BaseBuild {
    Id: number
    Name?: string
    Owner?: ProfileInfo
    IsPublic: boolean
    IsBanned: boolean
    IsPrimary: boolean
}

export interface SimpleBuild extends BaseBuild {
    Character: BaseAvatar
}

export interface Build extends BaseBuild {
    Character: Character
    CardCustomization?: CardCustomization
    ActiveLeaderboardId?: number
}