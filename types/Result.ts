export interface IResult<TData> {
    code: number,
    message: string,
    data?: TData
}

export interface IPagedResult<TData> extends IResult<TData[]> {
    page: number,
    totalPages: number
}

export interface ICursoredResult<TData, TCursor> extends IResult<TData[]> {
    cursor: TCursor,
    hasNextPage: boolean
}

export class Result {
    static ok<T>(data: T): IResult<T> {
        return {
            code: 0,
            message: "",
            data
        }
    }
    static err(code: number, message: string): any {
        return {
            code, message
        }
    }
    static okPaged<TData>(page: number, totalPages: number, data: TData[]): IPagedResult<TData> {
        return {
            code: 0,
            message: "",
            data,
            page,
            totalPages
        }
    }
    static okCursored<TData, TCursor>(
        cursor: TCursor, 
        hasNextPage: boolean, 
        data: TData[]
    ): ICursoredResult<TData, TCursor> {
        return {
            code: 0,
            message: "",
            data,
            cursor,
            hasNextPage
        }
    }
}
