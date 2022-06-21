const config = {
	title: 'Ты сегодня покормил кота?',
	feeds: [
		{
			id: 1,
			topSubtitle: 'Сказочное заморское яство',
			title: 'Нямушка',
			description: 'с фуа-гра',
			bottomSubtitle: [
				{ id: 1, text: '10 порций' },
				{ id: 2, text: 'мышь в подарок' },
			],
			weight: 0.5,
			bottomText: 'Печень утки разварная с артишоками.',
			status: 'default',
			img: 'cat.webp',
		},
		{
			id: 2,
			topSubtitle: 'Сказочное заморское яство',
			title: 'Нямушка',
			description: 'с рыбой',
			bottomSubtitle: [
				{ id: 1, text: '40 порций' },
				{ id: 2, text: '2 мыши в подарок' },
			],
			weight: 2,
			bottomText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
			status: 'default',
			img: 'cat.webp',
		},
		{
			id: 3,
			topSubtitle: 'Сказочное заморское яство',
			title: 'Нямушка',
			description: 'с курой',
			bottomSubtitle: [
				{ id: 1, text: '100 порций' },
				{ id: 2, text: '5 мышей в подарок' },
				{ id: 3, text: 'заказчик доволен' },
			],
			weight: 5,
			bottomText: 'Филе из цыплят с трюфелями в бульоне.',
			status: 'disabled',
			img: 'cat.webp',
		},
	],
}
export default config
