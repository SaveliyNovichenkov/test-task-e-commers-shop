import { IProduct } from '../../interfaces/product.interface'
import { AppDispatch } from '@/store/store'

export interface IOrder {
	item: IProduct
	onDelete: (item: IProduct) => (dispatch: AppDispatch) => void
	onAddAnotherItemToCart: (data: IProduct) => (dispatch: AppDispatch) => void
}
