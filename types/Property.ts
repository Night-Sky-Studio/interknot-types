export enum PropertyType {
    Delta = 0,
    Ratio = 1,
    Decimal = 2
}

export interface DataProperty {
    Id: number
    FormatType: PropertyType
    Name: string
    BaseValue: number
    Level: number
}