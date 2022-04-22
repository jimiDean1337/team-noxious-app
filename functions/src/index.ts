import { initializeApp } from './modules/init';
// import { respondToSubscriber } from './email/subscriber.function';
// import { respondToContact } from './email/contact.function';
import { sendEmailVerification } from './email/email-verification.function';
// import { deleteUserAccount } from './email/account-deleted.function';
import { passwordReset } from './email/password-reset.function';

// Init Firebase then return admin auth credentials
const { admin } = initializeApp();

/**
 * method for verifying user email address
 */
exports.sendEmailVerification = sendEmailVerification(admin);

/**
 * method for password reset
 */
exports.passwordReset = passwordReset(admin);

/**
 * method for deleting user
 */
// exports.deleteUserAccount = deleteUserAccount(admin);

/**
 * method for scheduling newsletter emails
 */
// exports.scheduleNewsletter = handleScheduledNewsletter(admin);

/**
 * method for sending welcome email to subscriber
 */
// exports.sendSubscriberWelcome = respondToSubscriber()

/**
 * method for sending response to contact
 */
// exports.sendNewContactEmail = respondToContact();
