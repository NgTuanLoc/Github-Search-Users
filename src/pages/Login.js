import styled from 'styled-components';
import LoginImage from '../images/login-img.svg';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Container>
			<div className='container'>
				<img src={LoginImage} alt='Login' />
				<h1>Github User</h1>
				<button
					className='btn'
					onClick={() => {
						loginWithRedirect();
					}}>
					Log In / Sign Up
				</button>
			</div>
		</Container>
	);
};

const Container = styled.section`
	min-height: 100vh;
	place-items: center;
	display: grid;

	.container {
		width: 90vw;
		max-width: 600px;
		text-align: center;
	}

	img {
		margin-bottom: 2rem;
	}
	h1 {
		margin-bottom: 1rem;
	}
`;

export default Login;
