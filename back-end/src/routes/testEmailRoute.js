import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
	path: '/api/test-email',
	method: 'post',
	handler: async (req, res) => {
		try {
			await sendEmail({
				to: 'adan.hernandez@bethinklabs.com',
				from: 'christopheraidenromeo@gmail.com',
				subject: 'Does this test email work?',
				text: 'If you\'re reading this, the test email has worked. Thanks'
			});

			res.sendStatus(200);
		} catch (e) {
			console.log(e);
			res.sendStatus(500);
		}
	}
}