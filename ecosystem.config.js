module.exports = {
	apps: [
		{
			name: 'tap_frontend',
			script: 'npm start',
			watch: false,
			force: true,
			env: {
				PORT: 443,
				NEXT_PUBLIC_REST_SERVER_BASE_URL: 'https://goldfish-app-ieflq.ondigitalocean.app/api'
			},
		},
	],
};
