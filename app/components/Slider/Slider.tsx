import s from './Slider.module.scss'
import { SliderInterface } from '@/components/Slider/Slider.interface'
import { Children, cloneElement, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Slider = ({ children, pageWidthInPx }: SliderInterface) => {
	const [pages, setPages] = useState<JSX.Element[]>([])
	const [offset, setOffset] = useState<number>(0)
	const PAGE_WIDTH = pageWidthInPx

	const handleLeftArrowClick = () => {
		setOffset(current => {
			const newOffset = current + PAGE_WIDTH
			return Math.min(newOffset, 0)
		})
	}

	const handleRightArrowClick = () => {
		setOffset(current => {
			const newOffset = current - PAGE_WIDTH
			const maxOffset = -(PAGE_WIDTH * (pages?.length - 1))
			return Math.max(newOffset, maxOffset)
		})
	}

	useEffect(() => {
		setPages(
			Children.map(children, child => {
				return cloneElement(child, {
					style: {
						height: '100%',
						minWidth: `${PAGE_WIDTH}px`,
						maxWidth: `${PAGE_WIDTH}px`
					}
				})
			})
		)
	}, [])

	return (
		<div className={s.main_container}>
			<div className={s.window_slider}>
				<button className={s.arrow_left_button} onClick={handleLeftArrowClick}>
					<FaChevronLeft />
				</button>
				<div
					className={s.all_items_container}
					style={{
						transform: `translateX(${offset}px)`
					}}
				>
					{pages}
				</div>
				<button
					className={s.arrow_right_button}
					onClick={handleRightArrowClick}
				>
					<FaChevronRight />
				</button>
			</div>
		</div>
	)
}
