export interface ITeacher {
  [name: string]: any;
  name?: string;
  role?: string[];
  tags?: any[];
  imgSrc?: string;
  id?: string;
  socialLinks?: ISocialLink[];
}

interface ISocialLink {
  icon?: string;
  url?: string;
  name?: string;
}
