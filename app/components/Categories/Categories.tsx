import { ICategoriesProps, ICategoriesState } from './Categories.interface'
import s from './Categories.module.scss'
import { useAppDispatch } from '@/store/store'
import React, { useState } from 'react'

export const Categories = ({
	chooseCategory,
	categories
}: ICategoriesProps) => {
	let [category, setCategory] = useState<ICategoriesState>()
	const dispatch = useAppDispatch()

	return (
		<div className={s.categories}>
			<div onClick={() => dispatch(chooseCategory('all'))}>Всё</div>
			{categories.map(el => (
				<div key={el.key} onClick={() => dispatch(chooseCategory(el.key))}>
					{el.name}
				</div>
			))}
		</div>
	)
}
{
	/*
export class Categories extends Component<ICategoriesProps, ICategoriesState> {
	constructor(props: ICategoriesProps) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'Всё'
				},
				{
					key: 'chairs',
					name: 'Стулья'
				},
				{
					key: 'tables',
					name: 'Столы'
				},
				{
					key: 'beds',
					name: 'Кровати'
				},
				{
					key: 'cupboards',
					name: 'Шкафы'
				}
			]
		}
	}
	render() {
		const dispatch = useAppDispatch()
		return (
			<div className={s.categories}>
				{this.state.categories.map(el => (
					<div
						key={el.key}
						onClick={() => dispatch(this.props.chooseCategory(el.key))}
					>
						{el.name}
					</div>
				))}
			</div>
		)
	}
}

*/
}
