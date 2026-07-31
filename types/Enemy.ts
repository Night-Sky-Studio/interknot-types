export interface CalculatorEnemy {
    Name: string
    Level: number
    LevelFactor: number
    Defense: number
    StunMultiplier: number
}

export interface AssaultList {
    Id: number
    Name: string
    GameVersion: string
    EnemyIconUrl: string
    StartDate: string
    EndDate: string
    Count: string
}

export interface Buff {
    Title: string
    Description: string
}

export interface AssaultDetail extends AssaultList {
    EnemyImageUrl: string
    Weakness: string[]
    LayerBuffs: Buff[]
    SelectableBuffs: Buff[]
}