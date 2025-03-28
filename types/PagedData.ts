export interface PagedData<T> {
    page: number;
    totalPages: number;
    items: T[];
}