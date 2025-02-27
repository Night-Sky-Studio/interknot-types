export enum PropertyType {
    Delta = 0,
    Ratio = 1,
    Decimal = 2
}

export interface IProperty {
    FormatType: PropertyType
    Id: number
    BaseValue: number
    Level: number
    get Value(): number
    set Value(other: number)
    get formatted(): string
    get name(): string
    get simpleName(): string
    get nameLocalized(): string
    get simpleNameLocalized(): string
    addValue(other: number): IProperty
    subtract(other: IProperty): IProperty
}