import { oauthClient } from './oathClient';

export const getGoogleOathUrl = () => {
	const scopes = [
		'https://www.googleapis.com/auth/userinfo.email',
		'https://www.googleapis.com/auth/userinfo.profile',
	];

	return oauthClient.generateAuthUrl({
		access_type: 'offline',
		prompt: 'consent',
		scope: scopes,
	});
}