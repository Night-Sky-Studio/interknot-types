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
    /**
     * - 0: Weapon Matches
     * - 1: Weapon's Secondary Stat Matches
     * - 2: Doesn't match
     */
    Type: number
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
    Character?: BaseAvatar
    Speciality?: string
    MindscapeLevel: number
    Weapon?: BaseWeapon
    WeaponRefinement?: number
    /** `setId: count` */
    DriveDiscSetId?: number
}

/**
 * Used for showing user's leaderboard entries on profile page
 */
export interface BaseLeaderboard {
    Id: number
    Name: string
    FullName: string
    Character: BaseAvatar
    Weapon: BaseWeapon
    MindscapeLevelMin: number
    Total: number
}

/**
 * Entries for table at `/leaderboards`
 */
export interface LeaderboardList extends BaseLeaderboard {
    ParentId?: number
    Children: BaseLeaderboard[]
    Team: BaseAvatar[] // TODO: Replace with LeaderboardTeamMember[]
}

/**
 * Full leaderboard data for `/leaderboards/{id}`
 */
export interface Leaderboard extends LeaderboardList {
    Description: string
    BackgroundUrl: string
    Rotation: string[]
    Enemy: Enemy
}

export interface LeaderboardDistribution {
    Data: Record<number, number>
    Top1AvgStats: Property[]
    UpdatedAt: string
}