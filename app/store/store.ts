import { ICategory, IProduct } from '../interfaces/product.interface'
import productReducer from './reducers/productSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface StateInterface {
	items: IProduct[]
	orders: IProduct[]
	currentItems: IProduct[]
	totalPrice: number
	categories: ICategory[]
}

const defaultState = {
	orders: [],
	items: [],
	currentItems: [],
	totalPrice: 0,
	categories: []
}

const rootReducer = combineReducers({
	productReducer
})

export const store = configureStore({
	reducer: rootReducer
})
