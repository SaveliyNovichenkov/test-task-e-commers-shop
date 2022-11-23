import s from '../Header.module.scss'
import { ShowOrdersInterface } from './ShowOrders.interface'
import { Order } from '@/components/Order/Order'
import React from 'react'

export const ShowOrders = ({
	orders,
	onAddAnotherItemToCart,
	onDelete
}: ShowOrdersInterface) => {
	let price = 0
	orders.forEach(el => {
		price += Math.floor(el.totalPrice)
	})
	return (
		<>
			<div className={s.wrapper}>
				{orders.map(item => (
					<Order
						key={item.id}
						item={item}
						onDelete={onDelete}
						onAddAnotherItemToCart={onAddAnotherItemToCart}
					></Order>
				))}
			</div>
			<span className={s.total_price}>
				Цена: {new Intl.NumberFormat().format(price)} ₽
			</span>
		</>
	)
}

export const ShowNothing = () => {
	return <div className={s.cartEmpty}>Корзина пуста</div>
}
