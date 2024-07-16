export interface IGetResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

export interface IGetAllResponse<T> {
  success: boolean;
  message?: string;
  data: T[];
  meta?: {
    total: number;
    currentPage: number;
    limit: number;
  };
}

export interface IQueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  search?: string;
}

export interface IChannel {
  _id: string;
  name: string;
  username: string;
  logo?: string;
  country: string;
  category: string;
  description?: string;
  createDate?: Date;
  totalViews?: number;
  totalSubscribers?: number;
  totalVideos?: number;
  createdAt: Date;
  updatedAt: Date;
}
