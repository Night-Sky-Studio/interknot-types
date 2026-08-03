export enum MedalType {
    ShiyuDefense = 1,
    SimulatedBattleTower = 2,
    DeadlyAssault = 3,
    SimulatedBattleTowerLastStand = 4,
    DeadlyAssaultHardcore = 14
}

export interface MedalIcon {
    Id: number
    Name: string,
    IconUrl: string,
    LevelFormat: string
}

export interface Medal {
    MedalType: MedalType
    MedalIcon: MedalIcon
    Value: number
    MedalScore: number
}