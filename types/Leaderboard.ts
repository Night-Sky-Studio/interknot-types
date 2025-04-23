import type { BaseAvatar } from "./Avatar"
import type { BaseWeapon } from "./Weapon"
import { SkillTag } from "./SkillTag"
import type { Enemy } from "./Enemy"
import { ProfileInfo } from "./Profile"
import { Character } from "./Character"
import { Property } from "./Property"

export interface AgentAction {
    Name: string
    Tag: SkillTag
    Damage: number
}

export interface BaseLeaderboardEntry {
    LeaderboardId: number
    Rotation: AgentAction[]
    TotalValue: number
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

export interface LeaderboardAgent extends BaseLeaderboardEntry {
    LeaderboardName: string
    Agent: BaseAvatar
    Weapon: BaseWeapon
    Team: BaseAvatar[]
}

export interface LeaderboardProfile {
    Uid: number
    Agents: LeaderboardAgent[]
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
    Top10AverageStats: Record<number, number>
    UpdatedAt: string
}