export interface ICourse {
  [name: string]: any;
  id?: string;
  educators?: any[];
  description?: string;
  details?: any;
  payload?: any;
  images?: any[];
  links?: any;
  name?: string;
  price?: string;
  reviews?: ICourseReviews;
  tags?: any[];
}

export interface ICourseDetails {
  [key: string]: any;
  sections?: any[];
}

export interface ICoureSection {
  [key: string]: any;
  title?: string;
  html?: string | HTMLElement | HTMLElement[];
}

export interface ICourseReviews {
  [key: string]: any;
  studentReviews?: ICourseReview[];
  averageScore?: number;
}

export interface ICourseReview {
  [key: string]: any;
  student?: ICourseStudent;
  reviewText?: string;
  rating?: number;
  metadata?: any;
}

export interface ICourseStudent {
  [key: string]: any;
  username?: string;
  id?: string;
  avatar?: any;
  tags?: any[];
}
