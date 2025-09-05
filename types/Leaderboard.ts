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

export interface FinalStats {
    BaseStats: Property[]
    CalculatedStats: Property[]
}

export interface BaseLeaderboardEntry {
    Leaderboard: BaseLeaderboard
    TotalValue: number
    RotationValue: AgentAction[]
    Rank: number
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

export interface LeaderboardTeamMember {
    Character: BaseAvatar | null
    MindscapeLevel: number
    Weapon: BaseWeapon | null
    WeaponRefinement: number | null
    /** `setId: count` */
    DriveDiscSetId: number | null
}

export interface BaseLeaderboard {
    Id: number
    Name: string
    Character: BaseAvatar
    Weapon: BaseWeapon
    MindscapeLevelMin: number
    Total: number
}

export interface Leaderboard extends BaseLeaderboard {
    ParentId?: number
    Children: Leaderboard[]
    FullName: string
    Description: string
    BackgroundUrl: string
    Team: BaseAvatar[] // TODO: Replace with LeaderboardTeamMember[]
    Rotation: string[]
    Enemy: Enemy
}

export interface LeaderboardDistribution {
    Data: Record<number, number>
    Top1AvgStats: Property[]
    UpdatedAt: string
}