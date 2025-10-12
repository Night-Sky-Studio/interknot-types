type FuncPredicate<TVal> = (v: TVal) => boolean
type Predicate<TVal> = TVal | FuncPredicate<TVal>
type FuncHandler<TVal, R> = (v: TVal) => R
type Handler<TVal, R> = R | FuncHandler<TVal, R>

export function match<TVal, R>(
    value: TVal,
    patterns: [...Array<[Predicate<TVal>, Handler<TVal, R>]>, Handler<TVal, R>]
): R {
    const [defaultHandler, rest] = !Array.isArray(patterns.at(-1))
        ? [patterns.pop() as Handler<TVal, R>, patterns]
        : [undefined, patterns]

    for (const [test, handler] of rest as Array<[Predicate<TVal>, Handler<TVal, R>]>) {
        const matched = typeof test === "function" 
                ? (test as FuncHandler<TVal, boolean>)(value) 
                : Object.is(test, value)
        if (matched)
            return typeof handler === "function" 
                ? (handler as FuncHandler<TVal, R>)(value) 
                : handler
    }

    if (defaultHandler)
        return typeof defaultHandler === "function"
            ? (defaultHandler as FuncHandler<TVal, R>)(value)
            : defaultHandler

    throw new Error("No match found.")
}
