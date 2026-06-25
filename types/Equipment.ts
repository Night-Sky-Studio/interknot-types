import type { Property } from "./Property"

export interface BaseEquipment {
    Id: number
    Name: string
    IconUrl: string
}

export interface Equipment extends BaseEquipment {
    Rarity: number
    SetBonusProps: Property[]
}