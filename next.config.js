/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		})

		return config
	},
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.API_URI
	},
	images: {
		domains: ['localhost']
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4200/api/:path*'
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
