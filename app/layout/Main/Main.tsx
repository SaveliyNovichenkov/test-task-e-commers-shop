import { MainInterface } from './Main.interface'
import s from './Main.module.scss'
import { Product } from '@/components/Product/Product'
import React from 'react'

export const Main = ({
	deleteOrder,
	items,
	onAddAnotherItemToCart
}: MainInterface) => {
	return (
		<main className={s.main}>
			{items.map(item => (
				<Product
					deleteOrder={deleteOrder}
					onAddAnotherItemToCart={onAddAnotherItemToCart}
					key={item.id}
					product={item}
				/>
			))}
		</main>
	)
}
