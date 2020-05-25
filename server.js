// this server should only be used as proxy on a server

if(process.env.NODE_ENV !== 'production') {
	const express = require('express')
	const app = express()
	const path = require('path')
	const { createProxyMiddleware } = require('http-proxy-middleware')

	const port = process.env.PORT || 5000
	const proxyServer = process.env.API_URL || 'http://profanity-check.eu-central-1.elasticbeanstalk.com'

	app.use('/api', createProxyMiddleware({ target: proxyServer, changeOrigin: true }))
	
	app.use(express.static(path.join(__dirname, './build')))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, './build', 'index.html'))
	})

	app.listen(port)
}

