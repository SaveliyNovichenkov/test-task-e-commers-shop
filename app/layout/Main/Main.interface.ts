import { IProduct } from '../../interfaces/product.interface'
import { AppDispatch } from '@/store/store'

export interface MainInterface {
	items: IProduct[]
	onAddAnotherItemToCart: (data: IProduct) => (dispatch: AppDispatch) => void
	deleteOrder: (data: IProduct) => (dispatch: AppDispatch) => void
}
