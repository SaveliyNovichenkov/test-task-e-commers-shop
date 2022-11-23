import { IProduct } from '../../interfaces/product.interface'
import { StateInterface } from '@/store/store'
import { PayloadAction } from '@reduxjs/toolkit'

const DELETE_ORDER = 'DELETE_ORDER'
const ADD_TO_ORDER = 'ADD_TO_ORDER'
const ADD_NEW_PRODUCT_PRICE_TO_CART = 'ADD_NEW_PRODUCT_PRICE_TO_CART'

export const reducerOrders = (
	state: StateInterface,
	action: PayloadAction<IProduct>
) => {
	switch (action.type) {
		case ADD_TO_ORDER:
			return { ...state, orders: [...state.orders, action.payload] }
		case DELETE_ORDER:
			let isInArray = false
			state.orders.forEach(el => {
				if (el.id === action.payload.id) {
					isInArray = true
				}
			})
			if (!isInArray) {
				return {
					...state,
					orders: [...state.orders.filter(el => el.id !== action.payload.id)]
				}
			}
			return
		case ADD_NEW_PRODUCT_PRICE_TO_CART:
			return {
				...state,
				orders: [
					...state.orders.map(item =>
						item.id === action.payload.id
							? {
									...item,
									count: action.payload.count + 1,
									totalPrice: action.payload.totalPrice + action.payload.price
							  }
							: item
					)
				]
			}
		default:
			return state
	}
}
