export interface Error {
    code: number
    message: string
    details?: string[]
}

export class Optional<TResult> {
    private value: [TResult?, Error?] = [undefined, undefined]

    constructor(result?: TResult, error?: Error) {
        this.value = [result, error]
    }

    static ok<TResult>(result: TResult): Optional<TResult> {
        return new Optional(result, undefined)
    }

    static err<TResult>(error: Error): Optional<TResult> {
        return new Optional(undefined as any, error)
    }

    result(): TResult | undefined {
        return this.value[0]
    }

    error(): Error | undefined {
        return this.value[1]
    }

    get isOk(): boolean {
        return this.value[0] !== undefined && this.value[1] === undefined
    }

    get isErr(): boolean {
        return this.value[1] !== undefined
    }

    *[Symbol.iterator](): Iterator<TResult | Error> {
        yield this.value[0]!
        yield this.value[1]!
    }
}