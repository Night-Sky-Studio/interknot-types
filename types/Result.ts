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
    static err(code: number, message: string): any {
        return {
            code, message
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
