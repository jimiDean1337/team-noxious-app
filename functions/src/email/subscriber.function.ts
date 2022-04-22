import * as functions from 'firebase-functions';
import { sendEmail, MailOptions } from '../modules/mail';
import { APP_NAME } from '../constants/app.name';
/**
 * method for sending welcome email to subscriber
 */
export function respondToSubscriber() {
    return functions.firestore
        .document(`subscribers/{subscriberId}`)
        .onCreate((snap, context) => {
            let user: any;
            if (snap.exists) {
                user = snap.data();
                return sendSubscriberWelcomeEmail(user.email)
                    .catch(err => console.log('error subscribing user', err));
            } else {
                return null;
            }
        });
}


async function sendSubscriberWelcomeEmail(email: string) {
    const mailOptions: MailOptions = {
        from: `"Team Noxious" noreply@teamnoxious.com`,
        to: email,
        subject: `👋 Thanks for subscribing to ${APP_NAME} updates!`,
        text: `Congratulations for making the decision to be part of a tech-centric community known as Team Noxious!\n\n Get the advantage of having access to our entire team, for help with coding, hardware, software and more!  \n\n All of our staff members are tech professionals, and have years of experience in their fields. \n\n\ Starting now, you will recieve Team Noxious updates, articles and more, direct to your inbox, free! \n\n\ Be sure to visit teamnoxious.com to create an account, become a legit member, and get ALL of the benefits, including access to the Official Team Noxious Forums, Team Noxious Courses discounts, and more!`
    };

    // The user subscribed to updates and the newsletter, send welcome email to user.
    await sendEmail(mailOptions);
    return null;
}
