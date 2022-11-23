import { IProduct } from '../../interfaces/product.interface'
import s from './Main.module.scss'
import { Product } from '@/components/Product/Product'
import { AppDispatch } from '@/store/store'
import React from 'react'

interface IMain {
	items: IProduct[]
	onAddAnotherItemToCart: (data: IProduct) => (dispatch: AppDispatch) => void
	deleteOrder: (data: IProduct) => (dispatch: AppDispatch) => void
}

export const Main = ({ deleteOrder, items, onAddAnotherItemToCart }: IMain) => {
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
