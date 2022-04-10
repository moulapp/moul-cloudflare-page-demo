export const isBrowser = () => typeof window !== 'undefined'
/**
 * Maintain aspect ratio on scale size
 *
 * @param width current width of image
 * @param height current height of image
 * @param maxWidth scale max width
 * @param maxHeight scale max height
 * @returns { width, height }
 */
export let getDimension = (width, height, maxWidth, maxHeight) => {
	const ratio = Math.min(maxWidth / width, maxHeight / height)
	return { width: width * ratio, height: height * ratio }
}

export let getPhotoSrcSet = (photo) => {
	const prefix = '/__moul/photos'
	return `${prefix}/${photo?.hash}/sm/${photo?.name} 320w,
	${prefix}/${photo?.hash}/md/${photo?.name} 768w,
	${prefix}/${photo?.hash}/lg/${photo?.name} 1024w,
	${prefix}/${photo?.hash}/xl/${photo?.name} 1440w`
}
export let getPhotoSrc = (photo) => {
	const prefix = '/__moul/photos'
	return `${prefix}/${photo?.hash}/xl/${photo?.name}`
}

export default {
	isBrowser,
}
