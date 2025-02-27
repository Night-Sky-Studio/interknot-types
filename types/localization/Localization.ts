import locs from "./locs.json"
import property from "./property.json"

const Localizations = locs as Record<string, Record<string, string>>
export const AvailableLocs = Object.keys(Localizations)

export let currentLocale = "en"

export function setLocale(loc: string) {
    if (AvailableLocs.indexOf(loc) === -1) 
        throw new Error(`Unknown locale: ${loc}. Available locales: ${AvailableLocs.join(", ")}`)
    currentLocale = loc
}

export function getLocalString(key: string): string {
    return Localizations[currentLocale][key]
}

type RawProperty = {
    Name: string
    Format: string
}

const Properties = property as Record<string, RawProperty>

export function getPropertyName(id: number): string {
    return Properties[id].Name
}