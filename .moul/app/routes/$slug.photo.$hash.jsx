import { json } from '@remix-run/cloudflare'
import { Link, useLoaderData, useNavigate } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getDimension, isBrowser, getPhotoSrcSet } from '~/utils'

import stories from '../../data/stories.json'

export const loader = async ({ request, params }) => {
	const { slug, hash } = params
	const story = stories.find((story) => story.slug === slug)
	const currentPhoto = story?.photos.find((p) => p.hash === hash)
	const title = story?.blocks.find((b) => b.type === 'title')?.text

	return json(
		{
			currentPhoto,
			photos: story?.photos,
			slug,
			story,
			title,
		},
		{
			headers: { Link: request.url },
		}
	)
}

export const headers = ({ loaderHeaders }) => {
	let cacheControl = loaderHeaders.get('Link')?.includes('localhost:')
		? 'public, max-age=0, must-revalidate'
		: 'public, max-age=1800, s-maxage=2592000, stale-while-revalidate=31540000000' // 30 mins, 30 days, 1 year
	// : 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=31540000000' // 1 day, 30 days, 1 year
	return {
		Link: `${loaderHeaders.get('Link')}; rel="canonical"`,
		'Cache-Control': cacheControl,
	}
}

export const meta = ({ data }) => {
	const { name, bio, social } = data.story.profile
	const { title: t, currentPhoto } = data
	const title = t ? `${t} | ${name}` : name
	const imgURL = currentPhoto && currentPhoto.bh ? `` : currentPhoto.url

	return {
		title,
		description: bio,
		'og:title': title,
		'og:url': data.canonical,
		'og:description': bio,
		'og:image': imgURL,
		'twitter:card': 'summary_large_image',
		'twitter:creator': social.twitter ? social.twitter : '',
	}
}
// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed=&file=/src/Example.tsx
let swipeConfidenceThreshold = 10000
let swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity
}

export default function Photo() {
	let { currentPhoto, photos, slug } = useLoaderData()
	let navigation = useNavigate()

	let [photo, setPhoto] = useState(currentPhoto.hash)
	let [width, setWidth] = useState(0)
	let [height, setHeight] = useState(0)

	let [currentIndex, setCurrentIndex] = useState(0)
	let [next, setNext] = useState('')
	let [prev, setPrev] = useState('')

	let [wrapper, setWrapper] = useState(0)
	let [currentWidth, setCurrentWidth] = useState(0)
	let [ui, setUi] = useState(true)
	let [active, setActive] = useState('translateX(0)')
	let [transition, setTransition] = useState('none')

	useEffect(() => {
		if (isBrowser()) {
			paintPhotos()
		}

		setCurrentIndex(photos.findIndex((p) => p.hash === photo))
		if (currentIndex > 0 && currentIndex < photos.length - 1) {
			setNext(photos[currentIndex + 1].hash)
			setPrev(photos[currentIndex - 1].hash)
		} else if (currentIndex === photos.length - 1) {
			setNext('')
			setPrev(photos[currentIndex - 1].hash)
		} else if (currentIndex === 0) {
			setPrev('')
			setNext(photos[currentIndex + 1].hash)
		}

		window.addEventListener('resize', paintPhotos)
		window.addEventListener('popstate', handlePopstate)
		window.addEventListener('keyup', handleKeyup)

		return () => {
			window.removeEventListener('popstate', handlePopstate)
			window.removeEventListener('resize', paintPhotos)
			window.removeEventListener('keyup', handleKeyup)
		}
	}, [
		photo,
		currentIndex,
		next,
		prev,
		width,
		height,
		wrapper,
		currentWidth,
		ui,
		active,
		transition,
	])

	let handlePopstate = () => {
		let pn = location.pathname.split('/')
		if (pn.length) {
			let isPhoto = pn[pn.length - 2] == 'photo'
			if (isPhoto) {
				let pIdx = photos.findIndex((p) => p.hash === pn[pn.length - 1])
				setPhoto(photos[pIdx].hash)
			}
		}
	}

	let paintPhotos = () => {
		const { width, height } = getDimension(
			currentPhoto.width,
			currentPhoto.height,
			window.innerWidth,
			window.innerHeight
		)
		setWidth(width)
		setHeight(height)

		setCurrentWidth(window.innerWidth)
		setWrapper(photos.length * window.innerWidth)

		const activeIndex = photos.findIndex((p) => p.hash === photo)
		// @ts-ignore
		setActive(`translateX(-${currentWidth * activeIndex}px)`)

		let photosList = document.querySelectorAll('.moul-darkbox-list picture img')
		photosList.forEach((img) => {
			let [w, h] = img.getAttribute('data-size').split(':')
			let { width, height } = getDimension(
				w,
				h,
				window.innerWidth,
				window.innerHeight
			)
			img.style.width = `${width}px`
			img.style.height = `${height}px`
		})
	}

	let handleKeyup = (event) => {
		if (event.key === 'ArrowRight') {
			handleNext()
		}
		if (event.key === 'ArrowLeft') {
			handlePrev()
		}
		if (event.key === 'Escape') {
			navigation('/' + slug)
		}
	}

	let handleNext = () => {
		if (!next) return
		setTransition('all var(--transition-photos)')
		let photoIndex = currentIndex + 1
		setPhoto(photos[photoIndex].hash)

		navigation(`/${slug}/photo/${next}`)
	}
	let handlePrev = () => {
		if (!prev) return
		setTransition('all var(--transition-photos)')
		let photoIndex = currentIndex - 1
		setPhoto(photos[photoIndex].hash)

		navigation(`/${slug}/photo/${prev}`)
	}
	let toggleUI = () => {
		setUi(!ui)
	}
	let handleUiClick = (event) => {
		if (event.target.className === 'moul-darkbox-list') {
			navigation('/' + slug)
		}
	}

	return (
		<div className="moul-darkbox-photo">
			{ui && (
				<>
					{prev && (
						<button
							className="moul-darkbox-btn fixed z-30 border-0 p-0 bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-900/20 dark:hover:bg-neutral-900/60 transition-colors is-prev left-4 rounded-full"
							onClick={handlePrev}
						>
							<svg
								fill="currentColor"
								viewBox="0 0 16 16"
								className="w-9 h-9 rounded-full p-1"
							>
								<path
									fillRule="evenodd"
									d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
								/>
							</svg>
						</button>
					)}
					{next && (
						<button
							className="moul-darkbox-btn fixed z-30 border-0 p-0 bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-900/20 dark:hover:bg-neutral-900/60 transition-colors is-next right-4 rounded-full"
							onClick={handleNext}
						>
							<svg
								fill="currentColor"
								viewBox="0 0 16 16"
								className="w-9 h-9 rounded-full p-1"
							>
								<path
									fillRule="evenodd"
									d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
								/>
							</svg>
						</button>
					)}
					<Link
						to={'/' + slug}
						className="moul-darkbox-btn fixed z-30 border-0 p-0 bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-900/20 dark:hover:bg-neutral-900/60 transition-colors top-4 left-4 is-close rounded-full"
					>
						<svg
							fill="currentColor"
							viewBox="0 0 16 16"
							className="w-9 h-9 rounded-full p-1"
						>
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</Link>
				</>
			)}
			<div className="moul-darkbox fixed top-0 bottom-0 left-0 right-0 z-10 transition opacity-100">
				<div className="moul-darkbox-wrap overflow-hidden h-screen">
					<div
						className="moul-darkbox-view relative mx-auto z-20 overflow-hidden"
						onClick={handleUiClick}
					>
						{/* this element is the full width of photos combine!  */}
						<div
							style={{
								transition: `${transition}`,
								transform: `${active}`,
								width: `${wrapper}px`,
							}}
						>
							{/* this element is the current active photo! */}
							<div style={{ width: `${currentWidth}px` }}>
								<div className="moul-darkbox-inner flex h-screen">
									{/* from here is the actual photo wrap with `min-width` */}
									<AnimatePresence initial={false}>
										{photos.map((p) => (
											<div
												key={p.hash}
												className="moul-darkbox-list flex justify-center items-center"
												style={{
													minWidth: `${currentWidth}px`,
												}}
											>
												<picture>
													{p.bh ? (
														<motion.img
															src={`data:image/jpeg;charset=utf-8;base64,${p.bh}`}
															className="lazy"
															data-sizes="auto"
															data-srcset={getPhotoSrcSet(p)}
															onClick={toggleUI}
															data-size={`${p.width}:${p.height}`}
															drag="x"
															dragConstraints={{
																left: 0,
																right: 0,
															}}
															dragElastic={0}
															onDragEnd={(e, { offset, velocity }) => {
																const swipe = swipePower(offset.x, velocity.x)
																if (swipe < -swipeConfidenceThreshold) {
																	handleNext()
																} else if (swipe > swipeConfidenceThreshold) {
																	handlePrev()
																}
															}}
															alt="photo"
														/>
													) : (
														<motion.img
															src={p.url}
															className="lazy"
															data-sizes="auto"
															onClick={toggleUI}
															data-size={`${p.width}:${p.height}`}
															drag="x"
															dragConstraints={{
																left: 0,
																right: 0,
															}}
															dragElastic={0}
															onDragEnd={(e, { offset, velocity }) => {
																const swipe = swipePower(offset.x, velocity.x)
																if (swipe < -swipeConfidenceThreshold) {
																	handleNext()
																} else if (swipe > swipeConfidenceThreshold) {
																	handlePrev()
																}
															}}
															alt="photo"
														/>
													)}
												</picture>
											</div>
										))}
									</AnimatePresence>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
