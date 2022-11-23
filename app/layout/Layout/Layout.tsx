import { Categories } from '../../components/Categories/Categories'
import {
	addNewProductPriceToOrderAction,
	chooseCategoryAction,
	deleteOrderAction,
	fetchProducts
} from '../../store/reducers/actions'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import React, { ReactNode, useEffect } from 'react'

interface LayoutProps {
	children: ReactNode
	forMainOrProduct: 'main' | 'product'
}

const Layout = ({ children, forMainOrProduct }: LayoutProps) => {
	const dispatch = useAppDispatch()
	const { products, currentItems, categories, isLoading, error, orders } =
		useAppSelector(state => state.productReducer)

	const funcChooseHeader = (forMainOrProduct: 'main' | 'product') => {
		if (forMainOrProduct == 'main') return 'main'
		if (forMainOrProduct == 'product') return 'product'
	}

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])
	if (forMainOrProduct == 'main') {
		return (
			<>
				<div className='wrapper'>
					<Header
						forMainOrProduct={funcChooseHeader(forMainOrProduct)}
						orders={orders}
						onDelete={deleteOrderAction}
						onAddAnotherItemToCart={addNewProductPriceToOrderAction}
					/>
					<Categories
						categories={categories}
						chooseCategory={chooseCategoryAction}
					/>
					{children}
					{/*<Main
                    deleteOrder={deleteOrderAction}
                    onAddAnotherItemToCart={addNewProductPriceToOrderAction}
                    items={currentItems}
                />*/}
					<Footer />
				</div>
			</>
		)
	}
	if (forMainOrProduct == 'product') {
		return (
			<>
				<div className='wrapper'>
					<Header
						forMainOrProduct={funcChooseHeader(forMainOrProduct)}
						orders={orders}
						onDelete={deleteOrderAction}
						onAddAnotherItemToCart={addNewProductPriceToOrderAction}
					/>
					{children}
					{/*<Main
                    deleteOrder={deleteOrderAction}
                    onAddAnotherItemToCart={addNewProductPriceToOrderAction}
                    items={currentItems}
                />*/}
					<Footer />
				</div>
			</>
		)
	}
	return <></>
}

export default Layout
