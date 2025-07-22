<script setup lang="ts">
const textUsSocialLinks = [
	{
		label: 'Telegram',
		icon: '/img/socials/telegram.svg',
		to: 'https://google.com',
	},
	{
		label: 'WhatsApp',
		icon: '/img/socials/whatsapp.svg',
		to: 'https://google.com',
	},
	{
		label: 'Live-chat',
		icon: '/img/socials/live-chat.svg',
		to: 'https://google.com',
	},
	{
		label: 'hello@dataway.ru',
		icon: '/img/socials/email.svg',
		to: 'mailto:hello@dataway.ru',
	},
]
</script>

<template>
	<article class="p-6 lg:p-[48px] rounded-[40px] bg-white">
		<h2 class="mobile-h3 lg:desktop-h3 mb-[56px]">
			Написать нам
		</h2>

		<div class="flex flex-col lg:flex-row lg:justify-between gap-6 w-full">
			<button
				v-for="textUsSocialLink in textUsSocialLinks"
				:key="textUsSocialLink.label"
				class="grow lg:grow-0 font-bold text-base lg:text-xl text-(--black-800) flex items-center gap-4"
			>
				<img
					:src="textUsSocialLink.icon"
					loading="lazy"
					width="60"
					height="60"
					alt="icon"
				>
				{{ textUsSocialLink.label }}
			</button>
		</div>
	</article>
</template>
