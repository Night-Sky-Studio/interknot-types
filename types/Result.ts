export interface IResult<TData> {
    success: boolean
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
            success: true,
            message: "",
            ttl,
            data
        }
    }
    static err(message: string): any {
        return {
            success: false, message
        }
    }
    static okPaged<TData>(
        data: TData[],
        page: number, 
        totalPages: number
    ): IPagedResult<TData> {
        return {
            success: true,
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
            success: true,
            message: "",
            data,
            cursor,
            hasNextPage,
            totalCountHash
        }
    }
}
