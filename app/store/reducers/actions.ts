import { IProduct } from '../../interfaces/product.interface'
import { productSlice } from '@/store/reducers/productSlice'
import { AppDispatch } from '@/store/store'
import axios from 'axios'

export const fetchProducts = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(productSlice.actions.productFetching())
		const response = await axios.get<IProduct[]>(
			'http://localhost:3004/products'
		)
		dispatch(productSlice.actions.productFetchingSuccess(response.data))
		dispatch(
			productSlice.actions.pushCategories(
				response.data.map(product => product.category)
			)
		)
	} catch (e) {
		dispatch(productSlice.actions.productFetchingError(e))
	}
}

export const addToOrderAction = (data: IProduct) => (dispatch: AppDispatch) => {
	dispatch(productSlice.actions.addToOrder(data))
}

export const deleteOrderAction =
	(data: IProduct) => (dispatch: AppDispatch) => {
		dispatch(productSlice.actions.deleteOrder(data))
	}

export const addNewProductPriceToOrderAction =
	(data: IProduct) => (dispatch: AppDispatch) => {
		dispatch(productSlice.actions.addNewProductPriceToOrder(data))
	}

export const chooseCategoryAction =
	(data: string) => (dispatch: AppDispatch) => {
		dispatch(productSlice.actions.chooseCategory(data))
	}

/*
		addToOrder(state: ProductInterface, action: PayloadAction<IProduct>) {
			return { ...state, orders: [...state.orders, action.payload] }
		},
		deleteOrder(state: ProductInterface, action: PayloadAction<IProduct>) {
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
		},
		addNewProductPriceToOrder(
			state: ProductInterface,
			action: PayloadAction<IProduct>
		) {
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
		},
		chooseCategory(state: ProductInterface, action: PayloadAction<string>) {
			if (action.payload == 'all') {
				return { ...state, currentItems: state.products }
			}
			return {
				...state,
				currentItems: [
					...state.products.filter(el => el.category === action.payload)
				]
			}
		}
	 */
