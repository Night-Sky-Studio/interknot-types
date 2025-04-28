import type { BaseAvatar } from "./Avatar"
import type { BaseWeapon } from "./Weapon"
import { SkillTag } from "./SkillTag"
import type { Enemy } from "./Enemy"
import type { ProfileInfo } from "./Profile"
import type { Character } from "./Character"
import { Property } from "./Property"

export interface AgentAction {
    Name: string
    Tag: SkillTag
    Damage: number
}

export interface BaseLeaderboardEntry {
    Leaderboard: Leaderboard
    TotalValue: number
    RotationValue: AgentAction[]
    Rank: number
    Total: number
}

export interface FinalStats {
    BaseStats: Property[]
    CalculatedStats: Property[]
}

export interface LeaderboardEntry extends BaseLeaderboardEntry {
    Profile: ProfileInfo
    Character: Character
    FinalStats: FinalStats
}

export interface LeaderboardProfile {
    Uid: number
    Agents: BaseLeaderboardEntry[]
}
export interface Leaderboard {
    Id: number
    ParentId?: number
    Children: Leaderboard[]
    Name: string
    FullName: string
    Description: string
    Character: BaseAvatar
    Weapon: BaseWeapon
    Team: BaseAvatar[]
    Rotation: string[]
    Enemy: Enemy
    MindscapeLevelMin: number
    Total: number
}

export interface LeaderboardDistribution {
    Data: Record<number, number>
    Top1AvgStats: Property[]
    UpdatedAt: string
}