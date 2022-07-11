export const data = {
	message: 'Request failed with status code 404',
	name: 'AxiosError',
	code: 'ERR_BAD_REQUEST',
	config: {
		transitional: {
			silentJSONParsing: true,
			forcedJSONParsing: true,
			clarifyTimeoutError: false,
		},
		transformRequest: [null],
		transformResponse: [null],
		timeout: 0,
		xsrfCookieName: 'XSRF-TOKEN',
		xsrfHeaderName: 'X-XSRF-TOKEN',
		maxContentLength: -1,
		maxBodyLength: -1,
		env: {
			FormData: null,
		},
		headers: {
			Accept: 'application/json, text/plain, */*',
		},
		method: 'get',
		url: 'https://api.github.com/users/asdfasdfasdfasdfasdfasdcxvbcvb',
	},
	request: {},
	response: {
		data: {
			message: 'Not Found',
			documentation_url:
				'https://docs.github.com/rest/reference/users#get-a-user',
		},
		status: 404,
		statusText: 'Not Found',
		headers: {
			'content-length': '117',
			'content-type': 'application/json; charset=utf-8',
			'x-github-media-type': 'github.v3',
			'x-github-request-id': '36A7:6A99:3640:15ED6:62CC3B46',
			'x-ratelimit-limit': '60',
			'x-ratelimit-remaining': '51',
			'x-ratelimit-reset': '1657554797',
			'x-ratelimit-resource': 'core',
			'x-ratelimit-used': '9',
		},
		config: {
			transitional: {
				silentJSONParsing: true,
				forcedJSONParsing: true,
				clarifyTimeoutError: false,
			},
			transformRequest: [null],
			transformResponse: [null],
			timeout: 0,
			xsrfCookieName: 'XSRF-TOKEN',
			xsrfHeaderName: 'X-XSRF-TOKEN',
			maxContentLength: -1,
			maxBodyLength: -1,
			env: {
				FormData: null,
			},
			headers: {
				Accept: 'application/json, text/plain, */*',
			},
			method: 'get',
			url: 'https://api.github.com/users/asdfasdfasdfasdfasdfasdcxvbcvb',
		},
		request: {},
	},
};
