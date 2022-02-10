import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

export const LogInPage = () => {
	const [token, setToken] = useToken();

	const [errorMessage, setErrorMessage] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const [googleOathUrl, setGoogleOathUrl] = useState('');

	const history = useHistory();

	useEffect(() => {
		const loadOathUrl = async () => {
			try {
				const response = await axios.get('/auth/google/url');

				const { url } = response.data;
				setGoogleOathUrl(url);
			} catch (e) {
				console.log(e);
			}
		}

		loadOathUrl();
	}, []);

	const onLogInClicked = async () => {
		const response = await axios.post('/api/login', {
			email: emailValue,
			password: passwordValue,
		});

		const { token } = response.data;
		setToken(token);
		history.push('/');
	}

	return (
		<div className="content-container">
			<h1>Log In</h1>
			{errorMessage && <div className="fail">{errorMessage}</div>}
			<input
				value={emailValue}
				onChange={(e) => setEmailValue(e.target.value)}
				placeholder="someone@mail.com"
			/>
			<input
				value={passwordValue}
				onChange={(e) => setPasswordValue(e.target.value)}
				type="password"
				placeholder="password"
			/>
			<hr />
			<button
				disabled={!emailValue || !passwordValue}
				onClick={onLogInClicked}>Log In</button>
			<button onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
			<button onClick={() => history.push('/signup')}>Dont have an account? Sign up</button>
			<button
				disabled={!googleOathUrl}
				onClick={() => { window.location.href = googleOathUrl }}
			>Log in with Google</button>
		</div>
	);
}