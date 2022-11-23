import { IProduct } from '../../interfaces/product.interface'
import { AppDispatch } from '@/store/store'

export interface ProductInterface {
	product: IProduct
	onAddAnotherItemToCart: (data: IProduct) => (dispatch: AppDispatch) => void
	deleteOrder: (data: IProduct) => (dispatch: AppDispatch) => void
}
