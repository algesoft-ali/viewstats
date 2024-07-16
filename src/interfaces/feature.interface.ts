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

export interface IChannel {
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
}
