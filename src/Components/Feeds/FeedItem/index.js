import { useDispatch } from 'react-redux'
import { changeFeedStatusAction } from '../../../store/actions'
import BottomText from './BottomText'

export const FeedItem = props => {
	const dotToComma = string => string.toString().replaceAll('.', ',')
	const dispatch = useDispatch()

	const changeStatusHandler = ({ id, status }) => {
		if (status !== 'disabled') dispatch(changeFeedStatusAction(id))
	}

	return (
		<div className={`item-feed__wrapper ${props.status}`}>
			<div
				onClick={() => {
					changeStatusHandler({ id: props.id, status: props.status })
				}}
				className={`item-feed ${props.status}`}
			>
				<img
					alt={props.description}
					src={require(`../../../assets/img/${props.img}`)}
				/>
				<div className='item-feed__top-subtitle'>
					<p>{props.topSubtitle}</p>
				</div>
				<div className='item-feed__title'>
					<p>{props.title}</p>
				</div>
				<div className='item-feed__description'>
					<p>{props.description}</p>
				</div>
				<div className='item-feed__bottom-subtitle'>
					{props.bottomSubtitle.map(p => (
						<p key={p.id}>{p.text}</p>
					))}
				</div>
				<div className={`item-feed__weight_wrapper ${props.status}`}>
					<div className='count_wrapper'>
						<p>{dotToComma(props.weight)}</p>
					</div>
					<div className='kilogram_wrapper'>
						<p>кг</p>
					</div>
				</div>
			</div>
			<div className={`item-feed__bottom-text ${props.status}`}>
				<BottomText
					id={props.id}
					bottomText={props.bottomText}
					status={props.status}
					description={props.description}
				/>
			</div>
		</div>
	)
}
