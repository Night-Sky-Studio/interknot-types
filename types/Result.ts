export interface IResult<TData> {
    code: number
    message: string
    ttl?: number
    data?: TData
}

export interface IPagedResult<TData> extends IResult<TData[]> {
    page: number
    totalPages: number
}

export interface ICursoredResult<TData> extends IResult<TData[]> {
    cursor?: string
    hasNextPage: boolean
    totalCountHash: string
}

export class Result {
    static ok<T>(data: T, ttl?: number): IResult<T> {
        return {
            code: 0,
            message: "",
            ttl,
            data
        }
    }
    static err(code: number, message: string): any {
        return {
            code, message
        }
    }
    static okPaged<TData>(
        data: TData[],
        page: number, 
        totalPages: number
    ): IPagedResult<TData> {
        return {
            code: 0,
            message: "",
            data,
            page,
            totalPages
        }
    }
    static okCursored<TData>(
        data: TData[],
        hasNextPage: boolean, 
        /** No cursor - last page; `hasNextPage = false` */
        cursor?: string, 
        totalCountHash: string = ""
    ): ICursoredResult<TData> {
        return {
            code: 0,
            message: "",
            data,
            cursor,
            hasNextPage,
            totalCountHash
        }
    }
}
