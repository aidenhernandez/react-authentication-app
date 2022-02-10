import { LoginRoute } from './LoginRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';
import { SignUpRoute } from './SignUpRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
// import { testEmailRoute } from './testEmailRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';


export const routes = [
	getGoogleOauthUrlRoute,
	testRoute,
	SignUpRoute,
	LoginRoute,
	updateUserInfoRoute,
	verifyEmailRoute,
	forgotPasswordRoute,
	resetPasswordRoute,
];
