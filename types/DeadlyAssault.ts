import type { ProfileInfo } from "./Profile";

export interface AssaultList {
    Id: number
    GameVersion: string
    EnemyName: string
    EnemyIconUrl: string
    StartDate: string
    EndDate: string
    Count: number
}

export interface Buff {
    Title: string
    Description: string
}

export interface AssaultDetail extends AssaultList {
    EnemyImageUrl: string
    EnemyWeaknesses: string[]
    LayerBuffs: Buff[]
    SelectableBuffs: Buff[]
}

export interface AssaultLeaderboardEntry {
    Profile: ProfileInfo
    TotalValue: number
    Rank: number
    IsBanned: boolean
}