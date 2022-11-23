import s from './Product.module.scss'
import { ProductInterface } from '@/components/Product/Product.interface'
import { useAppDispatch } from '@/store/store'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Product = ({
	product,
	onAddAnotherItemToCart,
	deleteOrder
}: ProductInterface) => {
	const dispatch = useAppDispatch()
	let [active, setActive] = useState<boolean>(false)
	const toggleActive = () => {
		setActive(true)
		dispatch(onAddAnotherItemToCart(product))
	}
	return (
		<div className={s.item}>
			<Link href={`/product/${product.id}`}>
				<a>
					<Image
						className={s.img}
						src={`/${product.img}`}
						width={614}
						height={480}
					/>
				</a>
			</Link>
			<div className={s.titlePrice}>
				<a href={'#'}>{product.title}</a>
				<span>{product.price} ₽</span>
			</div>
			{/*<p>{product.description}</p>*/}
			<button
				className={cn(s.addToCartButton, {
					[s.active]: active,
					[s.disabled]: !active
				})}
				onClick={() => toggleActive()}
			>
				<Image
					className={s.cart}
					src={`/add-cart.svg`}
					width={25}
					height={25}
				/>
			</button>
		</div>
	)
}
