import { FeedSelectionLayout } from './Components/Feeds/FeedSelectionLayout'
import { RowFeedItems } from './Components/Feeds/RowFeedItems'
import { store } from './store'
import { Provider } from 'react-redux'

export const App = () => {
	return (
		<Provider store={store}>
			<FeedSelectionLayout>
				<RowFeedItems />
			</FeedSelectionLayout>
		</Provider>
	)
}
