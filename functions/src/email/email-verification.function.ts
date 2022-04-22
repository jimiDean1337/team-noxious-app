import * as functions from 'firebase-functions';
import { sendEmail, MailOptions } from '../modules/mail';
import { APP_NAME } from '../constants/app.name';
// import * as Admin from 'firebase-admin';
// New Contact Response
export function sendEmailVerification(admin: any) {
    return functions.firestore
        .document(`users/{userId}`)
        .onCreate((snap, context) => {
            const resource = context.resource;
            const user: any = snap.data();
            if (snap.exists) {
                return admin.auth()
                    .generateEmailVerificationLink(user.email,
                        {
                            url: `https://localhost:4200/login`,
                        })
                    .then((link: string) => {
                    return sendVerificationEmail(
                        user.email,
                        user.firstname,
                        link
                    ).then(res => console.log(res))
                    .catch(err => console.log('Error! Failed to send email verification', err));

                })
            } else {
                console.log(`Failed to send verification email on ${resource}`, snap, context);
                return null;
            }
        });
}

async function sendVerificationEmail(email: string, name: string, link: string) {
    const mailOptions: MailOptions = {
        from: `"Team Noxious" info@teamnoxious.com`,
        to: email,
        subject: `Verification Request From ${APP_NAME}!`,
        html: `<h2 style="font-weight: bold;">${name}, please verify your email address.</h2><br><br><p>Verification is needed to join ${APP_NAME}</p><br><br><p>Use this link or copy and paste it in your browser url bar:</p><br><br><p>Link: <a href="${link}">${link}</a><br><br>Again, If you do not verify your email, you will not have access to ${APP_NAME}.`,
        /* TODO: Add Email Verification Template if not using Firebase Default Template */
    };

    // The user subscribed to updates and the newsletter, send welcome email to user.
    await sendEmail(mailOptions);
    return null;
}
