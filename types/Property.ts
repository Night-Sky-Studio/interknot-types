export enum PropertyType {
    Delta = 0,
    Ratio = 1,
    Decimal = 2
}

export type Property = {
    FormatType: PropertyType,
    Id: number,
    BaseValue: number,
    Level: number
}