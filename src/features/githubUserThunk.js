import axios from 'axios';
import { toggleError, checkUserRequest } from './githubUserSlice';

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

		if (!response.data) {
			thunkAPI.dispatch(toggleError('User not Found !'));
		}
		thunkAPI.dispatch(checkUserRequest());
		return response.data;
	} catch (error) {
		const message = error.response.statusText;
		if (error.response.status === 404) {
			thunkAPI.dispatch(toggleError(message));
		}
		return thunkAPI.rejectWithValue(message);
	}
};

export { checkUserRequestThunk, searchGithubUserThunk };
