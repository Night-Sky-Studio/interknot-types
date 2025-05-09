import type { BaseAvatar } from "./Avatar"
import type { DriveDisc, DriveDiscSet } from "./DriveDisc"
import type { Property } from "./Property"
import type { Skin } from "./Skin"
import type { Weapon } from "./Weapon"

export interface Talents {
    BasicAttack: number
    SpecialAttack: number
    Dash: number
    Ultimate: number
    CoreSkill: number
    Assist: number
}

export interface CharacterStats {
    BaseStats: Property[],
    WeaponStats: Property[],
    BonusStats: Property[]
    ComputedStats: Property[]
}

export interface Character extends BaseAvatar {
    Id: number
    Name: string
    Level: number
    PromotionLevel: number
    Skin: Skin | null
    MindscapeLevel: number
    CoreSkillEnhancement: number
    SkillLevels: Talents
    Weapon: Weapon | null
    WeaponEffect: boolean | null
    IsHidden: boolean
    DriveDisks: DriveDisc[]
    DriveDisksSet: DriveDiscSet[]
    Stats: Property[]
    DisplayProps: number[]
    CritValue: number
}