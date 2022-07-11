import { createSlice } from '@reduxjs/toolkit';

import mockUser from '../data/mockUser';
import mockRepos from '../data/mockRepos';
import mockFollowers from '../data/mockFollowers';

const initialState = {
	githubUsers: mockUser,
	repos: mockRepos,
	followers: mockFollowers,
};

const githubUserSlice = createSlice({
	name: 'githubUser',
	initialState,
	reducers: {
		getUser: () => {
			console.log('Hello');
		},
	},
});

export default githubUserSlice.reducer;
