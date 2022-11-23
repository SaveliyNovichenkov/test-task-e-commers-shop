export interface IProductPage {
	products: IProduct[]
}
export interface ProductPageProps {
	product: IProduct
}

export interface IProduct {
	id: number
	title: string
	img: string
	imgArray: ImgArray[]
	description: string
	category: ICategory
	price: number
	old_price: number
	count: number
	totalPrice: number
	options: Option[]
}
export interface ICategory {
	key: string
	name: string
}

export interface ImgArray {
	name: string
	img: string
}

export interface Option {
	name: string
	message: Message[]
}

export interface Message {
	name: string
	message: string
	rate?: number
}
