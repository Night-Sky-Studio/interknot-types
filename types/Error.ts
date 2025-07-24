export interface Error {
    Code: number
    Message: string
    Details?: string
}

export type Optional<TResult, TError = Error> = [TResult?, TError?]

export class Result {
    static ok<TResult>(result: TResult): Optional<TResult> {
        return [result, undefined]
    }

    static err(error: Error): Optional<never> {
        return [undefined, error]
    }
}