import { IVerification } from "./verification";

export interface IUser {
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
  verification?: IVerification;
}

export interface IUserAvatar {
  src?: string;
  isUrl?: boolean;
}
