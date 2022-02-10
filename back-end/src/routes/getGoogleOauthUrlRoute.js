import { getGoogleOathUrl } from '../util/getGoogleOauthUrl';

export const getGoogleOauthUrlRoute = {
	path: '/auth/google/url',
	method: 'get',
	handler: (req, res) => {
		const url = getGoogleOathUrl();

		res.status(200).json({ url });
	}
};
