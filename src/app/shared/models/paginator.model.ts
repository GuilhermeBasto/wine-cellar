export interface Paginator {
  page: number;
  pageSize: number;
}

export const defaultPaginator: Paginator = {
  page: 0,
  pageSize: 8,
};
