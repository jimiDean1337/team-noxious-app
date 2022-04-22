export const newsletterConfig = {
  newsletterId: '001',
  schedule: '0 0 1 * *',/* Rest back to 'the first day of every month' - [0 0 1 * *] */
  collection: 'tests',
  mailOptions: {
      from: `"Team Noxious" noreply@teamnoxious.com`,
      subject: 'Team Noxious Newsletter',
  }
}
/* TODO: Change collection to 'subcribers' before launch */
