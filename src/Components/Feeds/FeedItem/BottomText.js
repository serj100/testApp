import { useDispatch } from 'react-redux'
import { changeFeedStatusAction } from '../../../store/actions'

const BottomText = props => {
	const dispatch = useDispatch()
	const changeStatusHandler = ({ id, status }) => {
		if (status !== 'disabled') dispatch(changeFeedStatusAction(id))
	}
	if (props.status === 'active') {
		return <p>{props.bottomText}</p>
	} else if (props.status === 'disabled') {
		return <p>{`Печалька, ${props.description} закончился.`}</p>
	} else {
		return (
			<p>
				Чего сидишь? Порадуй котэ{' '}
				<button
					href='#'
					onClick={() => {
						changeStatusHandler({ id: props.id, status: props.status })
					}}
				>
					купи
				</button>
			</p>
		)
	}
}
export default BottomText
