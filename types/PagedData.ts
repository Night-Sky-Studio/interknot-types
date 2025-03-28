export interface PagedData<T> {
    page: number;
    limit: number;
    total: number;
    items: T[];
}