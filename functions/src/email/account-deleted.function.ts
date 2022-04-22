import * as functions from 'firebase-functions';
import { sendEmail, MailOptions } from '../modules/mail';
import { APP_NAME } from '../constants/app.name';

// User Deleteion and Response
export function deleteUserAccount(admin: any) {
    return functions.firestore
        .document(`users/{userId}`)
        .onDelete((snap, context) => {
            const resource = context.resource;
            const user: any = snap.data();
            if (snap.exists) {
                return admin.auth().deleteUser(user.id)
                    .then(() => {
                        return sendAccountDeletionNotification(
                            user.email,
                            user.firstname,
                        )
                        .catch(err => console.log('error deleting user', err));
                }).catch((err: any) => console.log('Error! Failed to delete user'))

            } else {
                console.log(`failed to send contact email on ${resource}`, snap, context);
                return null;
            }
        });
}

async function sendAccountDeletionNotification(email: string, name: string) {
    const mailOptions: MailOptions = {
        from: `"Team Noxious" noreply@teamnoxious.com`,
        to: email,
        subject: `Account Deleted from ${APP_NAME}!`,
        text: `${name}, you have deleted your account.\n\n${APP_NAME} has removed your user account and profile from our database.\n\nYou can come back any time and re-register to be a part of our amazing community.`
    };

    // The user subscribed to updates and the newsletter, send welcome email to user.
    await sendEmail(mailOptions);
    return null;
}
