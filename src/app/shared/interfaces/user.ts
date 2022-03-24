export interface User {
  [prop: string]: any;
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
