import axios from 'axios';
import { checkUserRequest } from './githubUserSlice';

const checkUserRequestThunk = async (url, thunkAPI) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

const searchGithubUserThunk = async (user, url, thunkAPI) => {
	try {
		const response = await axios.get(`${url}/${user}`);

		const githubUser = response.data;
		const { login, followers_url } = githubUser;

		const { data: repos } = await axios.get(
			`${url}/${login}/repos?per_page=100`
		);

		const { data: followers } = await axios.get(
			`${followers_url}?per_page=100`
		);

		thunkAPI.dispatch(checkUserRequest());
		return { githubUser, repos, followers };
	} catch (error) {
		const message = error.response.statusText;

		return thunkAPI.rejectWithValue(message);
	}
};

export { checkUserRequestThunk, searchGithubUserThunk };
