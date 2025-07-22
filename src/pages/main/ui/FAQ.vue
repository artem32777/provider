<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items: AccordionItem[] = [
	{
		label: 'Что означает уровень Tier III для вашего дата-центра?',
		content: 'Дата-центр уровня Tier III гарантирует 99.98% доступности услуг за счет резервирования всех критических систем (электроснабжение, охлаждение, сети). Это означает, что техническое обслуживание можно проводить без остановки работы серверов.',
	},
	{
		label: 'Где физически расположен ваш дата-центр?',
		content: 'Центр находится в Москве, в охраняемом технологическом парке. Доступ к инфраструктуре осуществляется через защищённые каналы связи, а данные хранятся в соответствии с требованиями 152-ФЗ.',
	},
	{
		label: 'Как обеспечивается защита данных?',
		content: 'Используем многоуровневую систему безопасности: биометрический доступ, круглосуточное видеонаблюдение, DDoS-защиту, шифрование данных. Резервные копии создаются ежедневно и хранятся на отдельном сервере.',
	},
	{
		label: 'Есть ли у вас SLA (Service Level Agreement)?',
		content: 'Да, мы гарантируем 99.98% аптайма в рамках SLA. В случае форс-мажора компенсируем простой в соответствии с условиями договора.',
	},
	{
		label: 'Почему ваши цены ниже, чем у конкурентов?',
		content: 'Мы используем ПО собственной разработки для автоматизации процессов, оптимизировали логистику и энергопотребление. Это позволяет снизить затраты без ущерба для качества.',
	},
	{
		label: 'Как быстро можно начать работу после заявки?',
		content: 'Подключение занимает от 1 часа до 1 рабочего дня. Скорость зависит от выбранной конфигурации и необходимости миграции данных.',
	},
	{
		label: 'Помогаете ли с переносом данных из другого дата-центра?',
		content: 'Да, предоставляем бесплатную консультацию и инструменты для безопасной миграции. Наши инженеры сопровождают процесс 24/7.',
	},
	{
		label: 'Есть ли тестовый период',
		content: 'Да, вы можете протестировать наши услуги в течение 14 дней. Если что-то не подойдет — вернем полную сумму.',
	},
]
</script>

<template>
	<UContainer
		as="section"
		class="flex flex-col items-center lg:py-[60px] lg:pb-[60px]"
	>
		<h2 class="mobile-h2 text-center mb-9 lg:mb-[56px] lg:desktop-h2 lg:truncate-[0.5px]">
			Частые вопросы
		</h2>

		<UAccordion
			:items="items"
			:ui="{
				item: 'faq-accordion__item border-0 last:[&>h3>button]:mb-0',
				trigger: 'px-[24px] py-2 lg:py-4 rounded-[32px] hover:bg-[#D3D7E0] data-[state=open]:bg-white mb-4 gap-1 lg:gap-1.5',
				trailingIcon: 'size-[24px]',
				label: 'text-(--black-900) text-base lg:text-xl font-normal leading-[22px] min-h-[44px] lg:min-h-0 inline-flex items-center lg:leading-[28px] max-w-[207px] min-[375px]:max-w-none',
				content: '[&>div]:text-base [&>div]:text-(--black-800) px-[24px] pt-3 lg:pt-2 lg:[&>div]:text-xl xl:max-w-[652px] !animate-none',
			}"
			class="faq-accordion w-full max-w-[550px] lg:max-w-[700px] lg:w-[700px] [&_.faq-accordion__item:first-child_h3_button_span]:max-w-[207px] [&_.faq-accordion__item:first-child_h3_button_span]:min-[375px]:max-w-none"
		/>
	</UContainer>
</template>
