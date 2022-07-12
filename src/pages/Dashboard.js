import styled from 'styled-components';
import { Info, User, Search, Navbar, Repos } from '../components';
import { useSelector } from 'react-redux';

import LoadingImage from '../images/preloader.gif';

const Dashboard = () => {
	const { loading } = useSelector((store) => store.githubUser);

	if (loading) {
		return (
			<Container>
				<Navbar />
				<Search />
				<img src={LoadingImage} alt='loading' className='loading-img' />
			</Container>
		);
	}

	return (
		<Container>
			<Navbar />
			<Search />
			<Info />
			<User />
			<Repos />
		</Container>
	);
};

const Container = styled.main``;

export default Dashboard;
