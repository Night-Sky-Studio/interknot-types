type Predicate<TVal> = TVal | ((v: TVal) => boolean)
type Handler<TVal, R> = R | ((v: TVal) => R)
export function match<TVal, R>(
    value: TVal,
    ...patterns: [...Array<[Predicate<TVal>, Handler<TVal, R>]>, Handler<TVal, R>]
): R;
export function match<TVal, R>(
    value: TVal,
    ...patterns: Array<[Predicate<TVal>, Handler<TVal, R>] | Handler<TVal, R>>
): R {
    if (patterns.length === 0) {
        throw new Error("match requires at least one pattern or a default.")
    }

    let defaultHandler: R | ((v: TVal) => R) | undefined
    const last = patterns[patterns.length - 1]

    // If last is NOT an array, treat as default
    if (!Array.isArray(last)) {
        defaultHandler = last as R | ((v: TVal) => R)
        patterns = patterns.slice(0, -1)
    }

    for (const entry of patterns as Array<[TVal | ((v: TVal) => boolean), R | ((v: TVal) => R)]>) {
        const [test, handler] = entry
        const matched =
            typeof test === 'function'
                ? (test as (v: TVal) => boolean)(value)
                : Object.is(test, value)

        if (matched) {
            return typeof handler === 'function'
                ? (handler as (v: TVal) => R)(value)
                : handler
        }
    }

    if (defaultHandler !== undefined) {
        return typeof defaultHandler === 'function'
            ? (defaultHandler as (v: TVal) => R)(value)
            : defaultHandler
    }

    throw new Error("No match found and no default handler provided.")
}