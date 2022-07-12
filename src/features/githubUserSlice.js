import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import mockUser from '../data/mockUser';
import mockRepos from '../data/mockRepos';
import mockFollowers from '../data/mockFollowers';
import {
	checkUserRequestThunk,
	searchGithubUserThunk,
} from './githubUserThunk';

const ROOT_URL = 'https://api.github.com';

const initialState = {
	githubUsers: mockUser,
	repos: mockRepos,
	followers: mockFollowers,
	request: 60,
	loading: true,
	error: { show: false, msg: '' },
};

export const checkUserRequest = createAsyncThunk(
	'user/checkRequest',
	async (thunkAPI) => {
		return checkUserRequestThunk(`${ROOT_URL}/rate_limit`, thunkAPI);
	}
);

export const searchGithubUser = createAsyncThunk(
	'/user/searchUser',
	async (user, thunkAPI) => {
		return searchGithubUserThunk(user, `${ROOT_URL}/users`, thunkAPI);
	}
);

const githubUserSlice = createSlice({
	name: 'githubUser',
	initialState,
	reducers: {
		toggleError: (state, { payload }) => {
			state.error = { show: true, msg: payload };
		},
	},
	extraReducers: {
		[checkUserRequest.pending]: (state) => {
			state.loading = true;
		},
		[checkUserRequest.fulfilled]: (state, { payload }) => {
			const {
				rate: { remaining },
			} = payload;
			state.loading = false;
			state.request = remaining;
		},
		[checkUserRequest.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = { show: true, msg: payload };
		},
		[searchGithubUser.pending]: (state) => {
			state.loading = true;
		},
		[searchGithubUser.fulfilled]: (state, { payload }) => {
			const { githubUser, repos, followers } = payload;
			state.loading = false;
			state.githubUsers = githubUser;
			state.repos = repos;
			state.followers = followers;
			state.error = { show: false, msg: '' };
		},
		[searchGithubUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = { show: true, msg: payload };
		},
	},
});

export const { toggleError } = githubUserSlice.actions;

export default githubUserSlice.reducer;
