import type { BaseAvatar } from "./Avatar"
import type { BaseWeapon } from "./Weapon"

export interface RawWeaponData { 
    weapons: WeaponEntry[] 
}

export interface RawLeaderboardProfile {
    agents: Record<number, RawWeaponData>
    cached: boolean
    response_time: number
    uid: number
}

export interface WeaponData extends BaseWeapon {
    Id: number
    BuildName: string
    Damage: number
    Players: number
    Rank: number
}

export interface WeaponEntry {
    Id: number
    Damage: number
    Players: number
    Rank: number
}

export interface LeaderboardAgent {
    Agent: BaseAvatar
    Weapons: WeaponData[]
}

export interface LeaderboardProfile {
    Uid: number
    Cached: boolean
    Agents: LeaderboardAgent[]
}