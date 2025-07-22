import { getRandomNumber } from './get-random-number'

export function generateLorem(length = 10, end = '') {
	return (
		[...Array(length)]
			.map((_, i) => getRandomWord(i === 0))
			.join(' ')
			.trim() + end
	)
}

const LOREM_WORDS = [
	'got',
	'ability',
	'shop',
	'recall',
	'fruit',
	'easy',
	'dirty',
	'giant',
	'shaking',
	'ground',
	'weather',
	'lesson',
	'almost',
	'square',
	'forward',
	'bend',
	'cold',
	'broken',
	'distant',
	'adjective.',
]

const LOREM_WORDS_RU = [
	'частности',
	'семантический',
	'разбор',
	'внешних',
	'противодействий',
	'создаёт',
	'необходимость',
	'включения',
	'в',
	'производственный',
	'план',
	'целого',
	'ряда',
	'внеочередных',
	'мероприятий',
	'с',
	'учётом',
	'комплекса',
	'укрепления',
	'моральных',
	'ценностей',
	'сложно',
	'сказать',
	'почему',
	'сторонники',
	'тоталитаризма',
	'науке',
	'инициированные',
	'исключительно',
	'синтетически',
	'призваны',
	'к',
	'ответу',
	'имеется',
	'спорная',
	'точка',
	'зрения',
	'гласящая',
	'примерно',
	'следующее',
	'многие',
	'известные',
	'личности,',
	'вне',
	'зависимости',
	'от',
	'их',
	'уровня',
	'должны',
	'быть',
	'разоблачены',
]

function getRandomWord(firstLetterToUppercase = false, isRu = true) {
	const loremWords = isRu ? LOREM_WORDS_RU : LOREM_WORDS
	const length = loremWords.length - 1
	const word = loremWords[getRandomNumber(0, length)]
	return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word
}
