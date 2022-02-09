import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = ({ to, from, subject, text, html }) => {
	const message = { to, from, subject, text, html };

	// returns a promise
	return sendgrid.send(message);
}