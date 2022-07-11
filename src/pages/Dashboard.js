import styled from 'styled-components';
import { Info, User, Search, Navbar, Repos } from '../components';

const Dashboard = () => {
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
