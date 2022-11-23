import { IProduct } from '../../interfaces/product.interface'
import { AppDispatch } from '@/store/store'

export interface HeaderInterface {
	orders?: IProduct[]
	onDelete: (item: IProduct) => (dispatch: AppDispatch) => void
	onAddAnotherItemToCart: (data: IProduct) => (dispatch: AppDispatch) => void
	forMainOrProduct: 'main' | 'product' | undefined
}
