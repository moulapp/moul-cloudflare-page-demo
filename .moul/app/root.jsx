import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import moulStyle from '~/moul.css'

export const meta = () => ({
	charset: 'utf-8',
	title: 'Moul',
	viewport: 'width=device-width,initial-scale=1',
})

export const links = () => {
	return [{ rel: 'stylesheet', href: moulStyle }]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			</head>
			<body className="dark:bg-black dark:text-white bg-white text-black overflow-x-hidden">
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
