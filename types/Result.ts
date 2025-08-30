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
    static err<T>(code: number, message: string): IResult<T> {
        return {
            code, message
        }
    }
    static pagedOk<T>(page: number, totalPages: number, data: T[]): IPagedResult<T> {
        return {
            code: 0,
            message: "",
            data,
            page,
            totalPages
        }
    }
}
