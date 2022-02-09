import { useHistory } from "react-router-dom";

export const PasswordResetFailure = () => {
	const history = useHistory();

	return (
		<div className="content-container">
			<h1>I'm Sorry :(</h1>
			<p>
				Something went wrong trying to reset your password.
			</p>

			<button onClick={() => history.push('/login')}>Back to Login</button>
		</div>
	)
}