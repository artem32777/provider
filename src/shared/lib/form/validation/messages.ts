export const enum ValidationMessages {
	REQUIRED = 'Обязательное поле',
	EMAIL_INVALID = 'Неверный формат email',
	PASSWORD_MISMATCH = 'Пароли не совпадают',
	PHONE_INVALID = 'Проверьте введённый номер',
	POSITIVE_NUMBER = 'Только положительные числа',
	PAST_DATE = 'Нельзя выбрать прошедшую дату',
	START_DATE_MUST_BEFORE_END_DATE = 'Дата начала должна быть раньше даты окончания',
	END_DATE_MUST_AFTER_START_DATE = 'Дата окончания должна быть позже даты начала',
	URL_INVALID = 'Некорректная ссылка',
	INVALID_CHARS = 'Некорректные символы',
}
