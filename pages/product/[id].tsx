import { findPercent } from '../../app/helpers/findPercent'
import {
	IProduct,
	ProductPageProps
} from '../../app/interfaces/product.interface'
import Layout from '../../app/layout/Layout/Layout'
import s from '../../styles/product.page.module.scss'
import { Slider } from '@/components/Slider/Slider'
import { useAppSelector } from '@/store/store'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import { ParsedUrlQuery } from 'node:querystring'
import React from 'react'

const Product = (props: ProductPageProps) => {
	const { isLoading, error, orders } = useAppSelector(
		state => state.productReducer
	)

	return (
		<Layout forMainOrProduct={'product'}>
			<div className={s.main}>
				<Slider pageWidthInPx={720}>
					{props.product.imgArray.map(image => (
						<div>
							<Image
								className={s.img}
								src={`/${image.img}`}
								width={720}
								height={720}
							/>
						</div>
					))}
				</Slider>
				<div className={s.options}>
					<div className={s.title}>{props.product.title}</div>
					<span className={s.price}>{props.product.price} ₽</span>
					<span className={s.old_price}>{props.product.old_price} ₽</span>
					<span className={s.discount}>
						{findPercent(props.product.old_price, props.product.price)} % Скидка
					</span>
				</div>
			</div>
		</Layout>
	)
}

export default Product

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('http://localhost:3004/products')
	const product: IProduct[] = await res.json()

	const paths = product.map(product => ({
		params: { id: product.id.toString() }
	}))

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<ProductProps> = async ({
	params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		}
	}
	try {
		const res = await fetch(`http://localhost:3004/products/${params.id}`)
		const product = await res.json()
		return {
			props: {
				product
			},
			revalidate: 600
		}
	} catch {
		return {
			notFound: true
		}
	}
}

interface ProductProps extends Record<string, unknown> {
	product: IProduct
}
