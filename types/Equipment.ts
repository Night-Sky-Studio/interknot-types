import type { DataProperty } from "./Property"

export interface Equipment {
    Id: number
    Name: string
    Rarity: number
    IconUrl: string
    SetBonusProps: DataProperty[]
}