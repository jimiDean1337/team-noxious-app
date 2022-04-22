export interface Verification {
  [key: string]: any;
  email?: EmailVerification;
  recaptcha?: RecaptchaVerification;
}

interface EmailVerification {
  [key: string]: any;
  email?: string;
  isVerified?: boolean;
  verificationDate?: any;
}

interface RecaptchaVerification {
  [key: string]: any;
  token?: string;
  secret?: string;
  isVerified?: boolean;
  verificationDate?: any;
}
