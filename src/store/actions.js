import { SET_FEEDS, SET_FEEDS_TITLE, SHANGE_FEED_STATUS } from './types'

export const setFeedsAction = feeds => ({
	type: SET_FEEDS,
	payload: feeds,
})

export const setFeedsTitleAction = title => ({
	type: SET_FEEDS_TITLE,
	payload: title,
})

export const changeFeedStatusAction = id => ({
	type: SHANGE_FEED_STATUS,
	payload: id,
})
