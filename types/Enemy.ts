export interface EnemyAnomaly {
    Element: string,
    AgentId: number,
    Stats: Record<number, number>
}
export interface CalculatorEnemy {
    Name: string
    Type: string
    Level: number
    LevelFactor: number
    Defense: number
    StunMultiplier: number
    Anomaly?: EnemyAnomaly
}
