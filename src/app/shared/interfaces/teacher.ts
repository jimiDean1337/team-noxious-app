export interface Teacher {
  [name: string]: any;
  name?: string;
  role?: string[];
  tags?: any[];
  imgSrc?: string;
  id?: string;
  socialLinks?: SocialLink[];
}

interface SocialLink {
  icon?: string;
  url?: string;
  name?: string;
}
