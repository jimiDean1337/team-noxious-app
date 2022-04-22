export interface Course {
  [name: string]: any;
  id?: string;
  educators?: any[];
  description?: string;
  images?: any[];
  links?: any;
  name?: string;
  price?: string;
  reviews?: Reviews;
  tags?: any[];
}

export interface Reviews {
  studentReviews?: Review[];
  averageScore?: number;
}

export interface Review {
  student?: Student;
  reviewText?: string;
  rating?: number;
  metadata?: any;
}

export interface Student {
  username?: string;
  id?: string;
  avatar?: any;
  tags?: any[];
}
