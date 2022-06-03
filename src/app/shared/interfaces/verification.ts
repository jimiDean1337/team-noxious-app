export interface IVerification {
  [key: string]: any;
  email?: IEmailVerification;
  recaptcha?: IRecaptchaVerification;
}

interface IEmailVerification {
  [key: string]: any;
  email?: string;
  isVerified?: boolean;
  verificationDate?: any;
}

interface IRecaptchaVerification {
  [key: string]: any;
  token?: string;
  secret?: string;
  isVerified?: boolean;
  verificationDate?: any;
}
