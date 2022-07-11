import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';

const Search = () => {
	const [user, setUser] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(user);
	};

	return (
		<section>
			<Container className='section-center'>
				<form onSubmit={onSubmitHandler} className='form-control'>
					<MdSearch />
					<input type='text' placeholder='Enter Github User' />
					<button type='submit' className='btn'>
						Search
					</button>
				</form>
				<h3>Request : 59/60</h3>
			</Container>
		</section>
	);
};

const Container = styled.div`
	position: relative;
	display: grid;
	gap: 1rem 1.75rem;

	@media only screen and (min-width: 768px) {
		grid-template-columns: 1fr max-content;
		align-items: center;

		h3 {
			padding: 0 0.5rem;
		}
	}

	.form-control {
		background-color: white;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		padding: 0.5rem;
		border-radius: 5px;
		column-gap: 1rem;

		input {
			border-color: transparent;
			outline-color: var(--clr-grey-10);
			letter-spacing: var(--spacing);
			color: var(--clr-grey-3);
			padding: 0.25rem 0.5rem;
		}
		input::placeholder {
			color: var(--clr-grey-3);
			text-transform: capitalize;
			letter-spacing: var(--spacing);
		}
		button {
			border-radius: 5px;
			border-color: transparent;
			padding: 0.25rem 0.5rem;
			text-transform: capitalize;
			letter-spacing: var(--spacing);
			background: var(--clr-primary-5);
			color: var(--clr-white);
			transition: var(--transition);
			cursor: pointer;
			&:hover {
				background: var(--clr-primary-8);
				color: var(--clr-primary-1);
			}
		}
		svg {
			color: var(--clr-grey-5);
		}
		input,
		button,
		svg {
			font-size: 1.3rem;
		}
		@media (max-width: 800px) {
			button,
			input,
			svg {
				font-size: 0.85rem;
			}
		}
	}
	h3 {
		margin-bottom: 0;
		color: var(--clr-grey-5);
		font-weight: 400;
	}
`;

const ErrorWrapper = styled.article`
	position: absolute;
	width: 90vw;
	top: 0;
	left: 0;
	transform: translateY(-100%);
	text-transform: capitalize;
	p {
		color: red;
		letter-spacing: var(--spacing);
	}
`;

export default Search;
