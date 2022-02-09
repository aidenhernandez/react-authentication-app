import { useHistory } from "react-router-dom";

export const EmailVerificationFail = () => {
	const history = useHistory();

	return (
		<div className="content-container">
			<h1>Oh nooo!</h1>
			<p>
				Something went wrong trying to verifiy email
			</p>

			<button onClick={() => history.push('/signup')}>Go to Sign-up Page</button>
		</div>
	)
}