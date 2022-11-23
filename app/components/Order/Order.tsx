import TrashIcon from '../../../public/trash.svg'
import { IProduct } from '../../interfaces/product.interface'
import s from './Order.module.scss'
import AddToCartIcon from './add-cart.svg'
import { AppDispatch, useAppDispatch } from '@/store/store'
import Image from 'next/image'
import React from 'react'

interface IOrder {
	item: IProduct
	onDelete: (item: IProduct) => (dispatch: AppDispatch) => void
	onAddAnotherItemToCart: (data: IProduct) => (dispatch: AppDispatch) => void
}

export const Order = ({ item, onDelete, onAddAnotherItemToCart }: IOrder) => {
	const dispatch = useAppDispatch()
	return (
		<div className={s.item}>
			<Image
				className={s.img}
				height={150}
				width={170}
				alt={'product image'}
				src={`/${item.img}`}
			/>
			<h2 className={s.title}>{item.title}</h2>
			<div className={s.footerOrder}>
				<span className={s.price}>
					{new Intl.NumberFormat().format(item.price)} ₽
				</span>
				<button
					className={s.buttonIcon}
					onClick={() => dispatch(onDelete(item))}
				>
					<TrashIcon className={s.icon} />
				</button>

				<button
					className={s.buttonIcon}
					onClick={() => dispatch(onAddAnotherItemToCart(item))}
				>
					<AddToCartIcon className={s.icon} />
				</button>

				<span className={s.count}>{item.count} шт.</span>
			</div>
		</div>
	)
}

{
	/*
export class Order extends Component<IOrder, {}> {
	render() {
		const dispatch = useAppDispatch()
		return (
			<div className={s.item}>
				<Image
					className={s.img}
					height={150}
					width={160}
					alt={'product image'}
					src={`/${this.props.item.img}`}
				/>
				<h2 className={s.title}>{this.props.item.title}</h2>
				<div className={s.footerOrder}>
					<span className={s.price}>{this.props.item.price} ₽</span>
					<button
						className={s.buttonIcon}
						onClick={() => dispatch(this.props.onDelete(this.props.item))}
					>
						<TrashIcon className={s.icon} />
					</button>

					<button
						className={s.buttonIcon}
						onClick={() =>
							dispatch(this.props.onAddAnotherItemToCart(this.props.item))
						}
					>
						<AddToCartIcon className={s.icon} />
					</button>

					<span className={s.count}>{this.props.item.count} шт.</span>
				</div>
			</div>
		)
	}
}
*/
}
