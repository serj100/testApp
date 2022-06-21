import { SET_FEEDS, SET_FEEDS_TITLE, SHANGE_FEED_STATUS } from '../types'

const defaultState = {
	title: '',
	feeds: [],
}

export const feedsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_FEEDS:
			return {
				...state,
				feeds: action.payload,
			}
		case SET_FEEDS_TITLE:
			return {
				...state,
				title: action.payload,
			}
		case SHANGE_FEED_STATUS:
			return {
				...state,
				feeds: state.feeds.map(feed =>
					feed.id === action.payload
						? {
								...feed,
								status: feed.status === 'active' ? 'default' : 'active',
						  }
						: feed
				),
			}
		default:
			return state
	}
}
