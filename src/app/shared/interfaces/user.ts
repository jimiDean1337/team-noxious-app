export interface User {
  [prop: string]: any;
  idField?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  username?: string;
  linkedAccounts?: any[];
  joinedOn?: Date;
  interests?: string[];
  avatar?: any;
  level?: string;
  isPremium?: boolean;
  courses?: any;
  roles?: string[];
  providerId?: string;
}

export interface UserAvatar {
  src?: string;
  isUrl?: boolean;
}
