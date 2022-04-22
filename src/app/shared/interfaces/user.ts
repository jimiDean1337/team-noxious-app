import { Verification } from "./verification";

export interface User {
  [prop: string]: any;
  idField?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  username?: string;
  linkedAccounts?: any[];
  joinedOn?: Date;
  interests?: any[];
  avatar?: any;
  level?: string;
  isPremium?: boolean;
  courses?: any;
  roles?: string[];
  providerId?: string;
  verification?: Verification;
}

export interface UserAvatar {
  src?: string;
  isUrl?: boolean;
}
