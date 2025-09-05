import type { Property } from "./Property"

export interface WeaponInfo {
    Id: number
    Name: string
    Rarity: number
    ProfessionType: string
    ImageUrl: string
}

export interface BaseWeapon extends WeaponInfo {
    MainStat: Property
    SecondaryStat: Property
}

export interface Weapon extends BaseWeapon {
    Uid: number
    Level: number
    BreakLevel: number
    UpgradeLevel: number    // (P)hase Level / Refinement
    IsAvailable: boolean
    IsLocked: boolean
}