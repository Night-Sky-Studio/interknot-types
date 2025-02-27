import type { CritValue } from "./CritValue"
import type { Equipment } from "./Equipment"
import type { IProperty } from "./Property"

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
    MainStat: IProperty
    SubStats: IProperty[],
    CritValue: CritValue
}