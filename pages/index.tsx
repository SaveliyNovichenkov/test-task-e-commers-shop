import Layout from '../app/layout/Layout/Layout'
import {
	addNewProductPriceToOrderAction,
	deleteOrderAction,
	fetchProducts
} from '@/store/reducers/actions'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Main } from 'layout/Main/Main'
import { NextPage } from 'next'
import React, { useEffect } from 'react'

const Home: NextPage = () => {
	const dispatch = useAppDispatch()
	const { currentItems } = useAppSelector(state => state.productReducer)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<Layout forMainOrProduct={'main'}>
			<Main
				deleteOrder={deleteOrderAction}
				onAddAnotherItemToCart={addNewProductPriceToOrderAction}
				items={currentItems}
			/>
		</Layout>
	)
}

export default Home

/*
export interface IItems {
	items: IProduct[]
	orders: IProduct[]
	currentItems: IProduct[]
	totalPrice: number
}

class Home extends React.Component<{}, IItems> {
	constructor(props: IProduct[]) {
		super(props)
		this.state = {
			totalPrice: 0,
			orders: [],
			currentItems: [],
			items: []
		}

		this.addToOrder = this.addToOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.addAnotherItemToCart = this.addAnotherItemToCart.bind(this)
	}

	componentDidMount = async () => {
		const res = await fetch('http://localhost:3004/products')
		const data = await res.json()
		this.setState({
			currentItems: data,
			items: data
		})
	}

	render() {
		//	const orders = JSON.parse(localStorage.order)
		return (
			<div className='wrapper'>
				<Header
					orders={this.state.orders}
					onDelete={this.deleteOrder}
					onAddAnotherItemToCart={this.addAnotherItemToCart}
				/>
				<Categories chooseCategory={this.chooseCategory} />
				<Main items={this.state.currentItems} onAdd={this.addToOrder} />
				<Footer />
			</div>
		)
	}

	chooseCategory(category: string) {
		if (category == 'all') {
			this.setState({
				currentItems: this.state.items
			})
			return
		}
		this.setState({
			currentItems: this.state.items.filter(el => el.category === category)
		})
	}

	addToOrder(item: IProduct) {
		let isInArray = false
		this.state.orders.forEach(el => {
			if (el.id === item.id) {
				isInArray = true
			}
		})
		if (!isInArray) {
			localStorage.setItem(
				'order',
				JSON.stringify([...this.state.orders, item])
			)
			this.setState({ orders: [...this.state.orders, item] })
		}

		/*
		if (!isInArray) {
			this.setState({ orders: [...this.state.orders, item] })
		}
		localStorage.setItem('order', JSON.stringify([...this.state.orders, item]))
		alert(localStorage.order)

	}

	deleteOrder(item: IProduct) {
		if (this.state.orders) {
			this.setState({
				orders: this.state.orders.filter(el => el.id !== item.id)
			})
			setTimeout(() => {
				localStorage.setItem('order', JSON.stringify([...this.state.orders]))
			}, 300)
		} else {
			localStorage.clear()
		}
		console.log(localStorage.order)
	}

	addAnotherItemToCart(
		id: number,
		count: number,
		price: number,
		totalPrice: number
	) {
		this.setState({
			orders: this.state.orders.map(item =>
				item.id === id
					? { ...item, count: count + 1, totalPrice: totalPrice + price }
					: item
			)
		})
	}
}

export default Home
*/
