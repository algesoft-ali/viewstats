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

export interface IVideo {
  _id: string;
  title: string;
  thumbnail: string;
  duration: string;
  uploadDate: Date | string;
  totalViews: number;
  type: "long" | "shorts";
  channel: IChannel ;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  name: string;
  email: string;
  password?: string;
  googleId?: string;
  avatar?: string;
}

export interface IDailyViews {
  _id: string;
  date: Date;
  views: number;
  channel: string;
  video?: string;
  rate: number;
}
export interface IDailySubscriber {
  _id: string;
  date: Date;
  subscribers: number;
  channel: string;
  rate: number;
}
