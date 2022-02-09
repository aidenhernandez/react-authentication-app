import { LoginRoute } from './LoginRoute';
import { SignUpRoute } from './SignUpRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
// import { testEmailRoute } from './testEmailRoute';
import { verifyEmailRoute } from './verifyEmailRoute';

export const routes = [
	testRoute,
	SignUpRoute,
	LoginRoute,
	updateUserInfoRoute,
	verifyEmailRoute
];
