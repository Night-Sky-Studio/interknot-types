import type { CritValue } from "./CritValue"
import type { Equipment } from "./Equipment"
import type { DataProperty } from "./Property"

export type DriveDiskSet = {
    Count: number,
    Set: Equipment
}

export interface DriveDisc extends Equipment {
    Id: number
    Uid: number
    SetId: number
    Slot: number
    IsAvailable: boolean
    IsTrash: boolean
    Rarity: number
    Level: number
    BreakLevel: number
    MainStat: DataProperty
    SubStats: DataProperty[],
    CritValue: CritValue
}