import { useHistory } from "react-router-dom";

export const EmailVerificationSuccess = () => {
	const history = useHistory();

	return (
		<div className="content-container">
			<h1>Success!</h1>
			<p>
				Thanks for verifying your email. Feel free to try out your new account features.
			</p>

			<button onClick={() => history.push('/')}>Go to Home Page</button>
		</div>
	)
}