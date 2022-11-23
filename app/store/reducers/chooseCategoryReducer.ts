import { StateInterface } from '@/store/store'
import { PayloadAction } from '@reduxjs/toolkit'

const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY'
export const reducerCategory = (
	state: StateInterface,
	action: PayloadAction<string>
) => {
	switch (action.type) {
		case CHOOSE_CATEGORY:
			if (action.payload == 'all') {
				return { ...state, currentItems: state.items }
			}
			return {
				...state,
				currentItems: [
					...state.items.filter(el => el.category === action.payload)
				]
			}
		default:
			return state
	}
}
