// !== Character

import type { Property } from "./Property"
import type { Skin } from "./Skin"

export interface HighlightedProps {
    BaseProps: number[]
    SubStats: number[]
    Slot4: number[]
    Slot5: number[]
    Slot6: number[]
    DriveDiscSets: number[]
}

export interface BaseAvatar {
    Id: number
    Name: string
    Rarity: number
    ProfessionType: string
    ElementTypes: string[]
    ImageUrl: string
    CircleIconUrl: string
    Colors: {
        Accent: string
        AccentExtra: string
        Mindscape: string
    }
    HighlightProps: number[]
    Highlights: HighlightedProps
}

export interface Avatar extends BaseAvatar {
    Skins: Skin[]
    BaseProps: Property[]
    GrowthProps: Property[]
    PromotionProps: Property[][]
    CoreEnhancementProps: Property[][]
}