<script setup lang="ts">
const icons: {
	name: string
	img: string
}[] = [
	{ name: 'VK', img: '/img/socials/vk.svg' },
	{ name: 'Ya', img: '/img/socials/ya.svg' },
	{ name: 'Telegram', img: '/img/socials/telegram.svg' },
	{ name: 'Gosuslugi', img: '/img/socials/gosuslugi.svg' },
]
</script>

<template>
	<div class="max-w-[336px] w-full">
		<ul class="flex items-center">
			<li
				v-for="icon in icons"
				:key="icon.name"
				class=""
			>
				<UButton
					variant="link"
					class="shrink-0 py-2.5 px-5 flex items-center"
					:to="'https://google.com'"
				>
					<img
						:src="icon.img"
						:alt="icon.name"
						width="44"
						height="44"
						loading="lazy"
					>
				</UButton>
			</li>
		</ul>
	</div>
</template>
