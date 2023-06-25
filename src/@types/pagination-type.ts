export interface PaginationProps{
    totalCount: number;
    page: number;
    onChange: (page: number) => void;
}