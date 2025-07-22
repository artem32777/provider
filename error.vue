<script setup lang="ts">
import type { NuxtError } from '#app'
import { SITEMAP } from '~/src/shared/router/sitemap'

defineProps<{
	error: NuxtError
}>()
</script>

<template>
	<NuxtLayout>
		<UContainer>
			<h1>
				Страница не найдена
			</h1>
			<div>
				К сожалению, запрашиваемой страницы не существует.
				Возможно, она была удалена или ссылка на неё устарела.
			</div>
			<UButton :to="SITEMAP.main.route">
				Вернуться на главную
			</UButton>
		</UContainer>
	</NuxtLayout>
</template>
