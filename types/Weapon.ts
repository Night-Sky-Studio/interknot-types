import type { DataProperty } from "./Property"

export interface BaseWeapon {
    Id: number
    Name: string
    Rarity: number
    ProfessionType: string
    ImageUrl: string
    MainStat: DataProperty
    SecondaryStat: DataProperty
}

export interface Weapon extends BaseWeapon {
    Uid: number
    Level: number
    BreakLevel: number
    UpgradeLevel: number    // (P)hase Level / Refinement
    IsAvailable: boolean
    IsLocked: boolean
}