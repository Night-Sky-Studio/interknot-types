export interface IResult<T> {
    code: number,
    message: string,
    data?: T
}

export interface IPagedResult<T> extends IResult<T[]> {
    page: number,
    totalPages: number
}

export class Result {
    static ok<T>(data: T): IResult<T> {
        return {
            code: 0,
            message: "",
            data
        }
    }
    static err<TResult extends IResult<any>>(
        code: number, 
        message: string, 
        extra?: Omit<TResult, "code" | "message" | "data">
    ): TResult {
        return {
            code, message, ...(extra as any)
        }
    }
    static okPaged<T>(page: number, totalPages: number, data: T[]): IPagedResult<T> {
        return {
            code: 0,
            message: "",
            data,
            page,
            totalPages
        }
    }
}
