import { ICategory } from '../../interfaces/product.interface'
import { AppDispatch } from '@/store/store'

export interface ICategoriesState {
	categories: ICategory[]
}
export interface ICategoriesProps {
	categories: ICategory[]
	chooseCategory: (category: string) => (dispatch: AppDispatch) => void
}
