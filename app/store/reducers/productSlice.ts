import { ICategory, IProduct } from '../../interfaces/product.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductInterface {
	product: IProduct | ''
	products: IProduct[]
	orders: IProduct[]
	currentItems: IProduct[]
	totalPrice: number
	isLoading: boolean
	error: string
	categories: ICategory[]
}

const initialState: ProductInterface = {
	product: '',
	products: [],
	orders: [],
	currentItems: [],
	totalPrice: 0,
	isLoading: false,
	error: '',
	categories: []
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		productFetching(state: ProductInterface) {
			state.isLoading = true
		},
		productFetchingSuccess(
			state: ProductInterface,
			action: PayloadAction<IProduct[]>
		) {
			state.isLoading = false
			state.products = action.payload
			state.currentItems = action.payload
		},
		productFetchingError(
			state: ProductInterface,
			action: PayloadAction<string>
		) {
			state.isLoading = false
			state.error = action.payload
		},
		pushCategories(
			state: ProductInterface,
			action: PayloadAction<ICategory[]>
		) {
			state.categories = action.payload
		},

		addToOrder(state: ProductInterface, action: PayloadAction<IProduct>) {
			state.orders = [...state.orders, action.payload]
		},
		deleteOrder(state: ProductInterface, action: PayloadAction<IProduct>) {
			let isInArray = false
			state.orders.forEach(el => {
				if (el.id === action.payload.id) {
					isInArray = true
				}
			})
			if (isInArray) {
				state.orders = [
					...state.orders.filter(el => el.id !== action.payload.id)
				]
			}
			return
		},
		addNewProductPriceToOrder(
			state: ProductInterface,
			action: PayloadAction<IProduct>
		) {
			let isInArray = false
			state.orders.forEach(el => {
				if (el.id === action.payload.id) {
					isInArray = true
				}
			})
			if (isInArray) {
				state.orders = state.orders.map(item =>
					item.id === action.payload.id
						? {
								...item,
								count: action.payload.count + 1,
								totalPrice: action.payload.totalPrice + action.payload.price
						  }
						: item
				)
			}
			if (!isInArray) {
				state.orders = [...state.orders, action.payload]
			}
		},
		chooseCategory(state: ProductInterface, action: PayloadAction<string>) {
			state.currentItems = state.products
			if (action.payload !== 'all')
				state.currentItems = state.products.filter(
					el => el.category.key === action.payload
				)
		}
	},
	extraReducers: {}
})

export default productSlice.reducer
