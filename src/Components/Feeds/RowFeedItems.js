import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import config from '../../config'
import { setFeedsAction, setFeedsTitleAction } from '../../store/actions'
import { FeedItem } from './FeedItem'

export const RowFeedItems = () => {
	const dispatch = useDispatch()
	const feeds = useSelector(state => state.feeds.feeds)
	const title = useSelector(state => state.feeds.title)

	const feedsHandler = ({ feeds, title }) => {
		dispatch(setFeedsAction(feeds))
		dispatch(setFeedsTitleAction(title))
	}

	useEffect(() => {
		feedsHandler({ feeds: config.feeds, title: config.title })
	}, [])

	return (
		<div className='feed-selection-layout__row'>
			<div className='feed-selection-layout__title'>
				<p>{title}</p>
			</div>
			<div className='feed-selection-layout__wrapper'>
				{feeds.map(feed => (
					<FeedItem
						key={feed.id.toString()}
						topSubtitle={feed.topSubtitle}
						title={feed.title}
						description={feed.description}
						bottomSubtitle={feed.bottomSubtitle}
						weight={feed.weight}
						bottomText={feed.bottomText}
						status={feed.status}
						img={feed.img}
						id={feed.id}
					/>
				))}
			</div>
		</div>
	)
}
