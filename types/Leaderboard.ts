import type { BaseAvatar } from "./Avatar"
import type { BaseWeapon } from "./Weapon"
import { SkillTag } from "./SkillTag"

export interface AgentAction {
    Name: string
    Tag: SkillTag
    Damage: number
}

export interface LeaderboardAgent {
    LeaderboardId: number
    LeaderboardName: string
    Agent: BaseAvatar
    Weapon: BaseWeapon
    Team: BaseAvatar[]
    Rank: number
    Total: number
    Rotation: AgentAction[]
    TotalValue: number
}

export interface LeaderboardProfile {
    Uid: number
    Agents: LeaderboardAgent[]
}