import { IProduct } from '../../interfaces/product.interface'
import s from './Header.module.scss'
import { Order } from '@/components/Order/Order'
import { AppDispatch } from '@/store/store'
import cn from 'classnames'
import React, { useState } from 'react'

interface IOrdersFoHeader {
	orders?: IProduct[]
	onDelete: (item: IProduct) => (dispatch: AppDispatch) => void
	onAddAnotherItemToCart: (data: IProduct) => (dispatch: AppDispatch) => void
	forMainOrProduct: 'main' | 'product' | undefined
}

const showOrders = (
	orders: IProduct[],
	onDelete: (item: IProduct) => (dispatch: AppDispatch) => void,
	onAddAnotherItemToCart: (data: IProduct) => (dispatch: AppDispatch) => void
) => {
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

const showNothing = () => {
	return <div className={s.cartEmpty}>Корзина пуста</div>
}

export const Header = ({
	forMainOrProduct,
	orders,
	onAddAnotherItemToCart,
	onDelete
}: IOrdersFoHeader) => {
	let [cartOpen, setCartOpen] = useState<boolean>(false)

	if (!orders) {
		return <></>
	}
	if (forMainOrProduct == 'main') {
		return (
			<header className={s.header}>
				<div>
					<span className={s.logo}>
						<a href={'/'}>House Staff</a>
					</span>
					<ul className={s.nav}>
						<li>Про нас</li>
						<li>Контакты</li>
						<li>Кабинет</li>
					</ul>
					<svg
						onClick={() => setCartOpen(!cartOpen)}
						className={cn(s.shopCart, {
							[s.active]: cartOpen
						})}
						xmlns='http://www.w3.org/2000/svg'
						width='25px'
						height='25px'
						viewBox='0 0 45 45'
						version='1.1'
					>
						<g id='surface1'>
							<path
								fill='#222'
								d='M 33.464844 28.796875 L 38.96875 7.238281 L 44.992188 7.238281 L 44.992188 3.847656 L 36.335938 3.847656 L 35.039062 8.929688 L 0 8.90625 L 3.726562 28.796875 Z M 34.175781 12.316406 L 30.832031 25.40625 L 6.539062 25.40625 L 4.082031 12.296875 Z M 34.175781 12.316406 '
							/>
							<path
								fill='#222'
								d='M 28.824219 41.144531 C 31.8125 41.144531 34.242188 38.714844 34.242188 35.726562 C 34.242188 32.738281 31.8125 30.308594 28.824219 30.308594 L 8.40625 30.308594 C 5.417969 30.308594 2.988281 32.738281 2.988281 35.726562 C 2.988281 38.714844 5.417969 41.144531 8.40625 41.144531 C 11.394531 41.144531 13.828125 38.714844 13.828125 35.726562 C 13.828125 35.007812 13.6875 34.324219 13.433594 33.695312 L 23.800781 33.695312 C 23.546875 34.324219 23.40625 35.007812 23.40625 35.726562 C 23.40625 38.714844 25.835938 41.144531 28.824219 41.144531 Z M 10.4375 35.726562 C 10.4375 36.84375 9.527344 37.757812 8.40625 37.757812 C 7.289062 37.757812 6.378906 36.84375 6.378906 35.726562 C 6.378906 34.605469 7.289062 33.695312 8.40625 33.695312 C 9.527344 33.695312 10.4375 34.605469 10.4375 35.726562 Z M 30.855469 35.726562 C 30.855469 36.84375 29.945312 37.757812 28.824219 37.757812 C 27.707031 37.757812 26.792969 36.84375 26.792969 35.726562 C 26.792969 34.605469 27.707031 33.695312 28.824219 33.695312 C 29.945312 33.695312 30.855469 34.605469 30.855469 35.726562 Z M 30.855469 35.726562 '
							/>
						</g>
					</svg>
					{cartOpen && (
						<div className={s.shopCartWindow}>
							{orders.length > 0
								? showOrders(orders, onDelete, onAddAnotherItemToCart)
								: showNothing()}
						</div>
					)}
				</div>
				<div className={s.presentation}>
					<div className={s.title}>Лучшие товары для вашего дома</div>
				</div>
			</header>
		)
	}
	if (forMainOrProduct == 'product') {
		return (
			<header className={s.header}>
				<div>
					<span className={s.logo}>
						<a href={'/'}>House Staff</a>
					</span>
					<ul className={s.nav}>
						<li>Про нас</li>
						<li>Контакты</li>
						<li>Кабинет</li>
					</ul>
					<svg
						onClick={() => setCartOpen(!cartOpen)}
						className={cn(s.shopCart, {
							[s.active]: cartOpen
						})}
						xmlns='http://www.w3.org/2000/svg'
						width='25px'
						height='25px'
						viewBox='0 0 45 45'
						version='1.1'
					>
						<g id='surface1'>
							<path
								fill='#222'
								d='M 33.464844 28.796875 L 38.96875 7.238281 L 44.992188 7.238281 L 44.992188 3.847656 L 36.335938 3.847656 L 35.039062 8.929688 L 0 8.90625 L 3.726562 28.796875 Z M 34.175781 12.316406 L 30.832031 25.40625 L 6.539062 25.40625 L 4.082031 12.296875 Z M 34.175781 12.316406 '
							/>
							<path
								fill='#222'
								d='M 28.824219 41.144531 C 31.8125 41.144531 34.242188 38.714844 34.242188 35.726562 C 34.242188 32.738281 31.8125 30.308594 28.824219 30.308594 L 8.40625 30.308594 C 5.417969 30.308594 2.988281 32.738281 2.988281 35.726562 C 2.988281 38.714844 5.417969 41.144531 8.40625 41.144531 C 11.394531 41.144531 13.828125 38.714844 13.828125 35.726562 C 13.828125 35.007812 13.6875 34.324219 13.433594 33.695312 L 23.800781 33.695312 C 23.546875 34.324219 23.40625 35.007812 23.40625 35.726562 C 23.40625 38.714844 25.835938 41.144531 28.824219 41.144531 Z M 10.4375 35.726562 C 10.4375 36.84375 9.527344 37.757812 8.40625 37.757812 C 7.289062 37.757812 6.378906 36.84375 6.378906 35.726562 C 6.378906 34.605469 7.289062 33.695312 8.40625 33.695312 C 9.527344 33.695312 10.4375 34.605469 10.4375 35.726562 Z M 30.855469 35.726562 C 30.855469 36.84375 29.945312 37.757812 28.824219 37.757812 C 27.707031 37.757812 26.792969 36.84375 26.792969 35.726562 C 26.792969 34.605469 27.707031 33.695312 28.824219 33.695312 C 29.945312 33.695312 30.855469 34.605469 30.855469 35.726562 Z M 30.855469 35.726562 '
							/>
						</g>
					</svg>
					{cartOpen && (
						<div className={s.shopCartWindow}>
							{orders.length > 0
								? showOrders(orders, onDelete, onAddAnotherItemToCart)
								: showNothing()}
						</div>
					)}
				</div>
			</header>
		)
	}
	return <></>
}
{
	/*
    export class Header extends Component<IOrdersFoHeader, {}> {
        state = {
            cartOpen: false
        }

        onChangeCartOpen = (value: boolean) => {
            this.setState({ cartOpen: value })
        }

        constructor(props: IOrdersFoHeader) {
            super(props)
        }

        render() {
            const { cartOpen } = this.state
            if (!this.props.orders) {
                return <></>
            }
            return (
                <header className={s.header}>
                    <div>
                        <span className={s.logo}>House Staff</span>
                        <ul className={s.nav}>
                            <li>Про нас</li>
                            <li>Контакты</li>
                            <li>Кабинет</li>
                        </ul>
                        <svg
                            onClick={() =>
                                this.onChangeCartOpen(
                                    (this.state.cartOpen = !this.state.cartOpen)
                                )
                            }
                            className={cn(s.shopCart, {
                                [s.active]: cartOpen
                            })}
                            xmlns='http://www.w3.org/2000/svg'
                            width='25px'
                            height='25px'
                            viewBox='0 0 45 45'
                            version='1.1'
                        >
                            <g id='surface1'>
                                <path
                                    fill='#222'
                                    d='M 33.464844 28.796875 L 38.96875 7.238281 L 44.992188 7.238281 L 44.992188 3.847656 L 36.335938 3.847656 L 35.039062 8.929688 L 0 8.90625 L 3.726562 28.796875 Z M 34.175781 12.316406 L 30.832031 25.40625 L 6.539062 25.40625 L 4.082031 12.296875 Z M 34.175781 12.316406 '
                                />
                                <path
                                    fill='#222'
                                    d='M 28.824219 41.144531 C 31.8125 41.144531 34.242188 38.714844 34.242188 35.726562 C 34.242188 32.738281 31.8125 30.308594 28.824219 30.308594 L 8.40625 30.308594 C 5.417969 30.308594 2.988281 32.738281 2.988281 35.726562 C 2.988281 38.714844 5.417969 41.144531 8.40625 41.144531 C 11.394531 41.144531 13.828125 38.714844 13.828125 35.726562 C 13.828125 35.007812 13.6875 34.324219 13.433594 33.695312 L 23.800781 33.695312 C 23.546875 34.324219 23.40625 35.007812 23.40625 35.726562 C 23.40625 38.714844 25.835938 41.144531 28.824219 41.144531 Z M 10.4375 35.726562 C 10.4375 36.84375 9.527344 37.757812 8.40625 37.757812 C 7.289062 37.757812 6.378906 36.84375 6.378906 35.726562 C 6.378906 34.605469 7.289062 33.695312 8.40625 33.695312 C 9.527344 33.695312 10.4375 34.605469 10.4375 35.726562 Z M 30.855469 35.726562 C 30.855469 36.84375 29.945312 37.757812 28.824219 37.757812 C 27.707031 37.757812 26.792969 36.84375 26.792969 35.726562 C 26.792969 34.605469 27.707031 33.695312 28.824219 33.695312 C 29.945312 33.695312 30.855469 34.605469 30.855469 35.726562 Z M 30.855469 35.726562 '
                                />
                            </g>
                        </svg>
                        {cartOpen && (
                            <div className={s.shopCartWindow}>
                                {this.props.orders.length > 0
                                    ? showOrders(
                                            this.props.orders,
                                            this.props.onDelete,
                                            this.props.onAddAnotherItemToCart
                                      )
                                    : showNothing()}
                            </div>
                        )}
                    </div>
                    <div className={s.presentation}>
                        <div className={s.title}>Лучшие товары для вашего дома</div>
                    </div>
                </header>
            )
        }
    }
    */
}
