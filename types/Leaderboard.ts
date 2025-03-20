import type { BaseAvatar } from "./Avatar"
import type { BaseWeapon } from "./Weapon"

export interface LeaderboardAgent {
    LeaderboardId: number
    LeaderboardName: string
    Agent: BaseAvatar
    Weapon: BaseWeapon
    Team: BaseAvatar[]
    Rank: number
    Total: number
    Rotation: string[]
    RotationValue: number[]
    TotalValue: number
}

export interface LeaderboardProfile {
    Uid: number
    Agents: LeaderboardAgent[]
}