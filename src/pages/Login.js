import styled from 'styled-components';
import LoginImage from '../images/login-img.svg';

const Login = () => {
	return (
		<Container>
			<div className='container'>
				<img src={LoginImage} alt='Login' />
				<h1>Github User</h1>
				<button className='btn' type='button'>
					Login
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
