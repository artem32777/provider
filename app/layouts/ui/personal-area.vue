<template>
	<div class="grid min-h-[100dvh] bg-(--gray-bg) grid-cols-[240px_1fr] grid-rows-[80px_1fr]">
		<div class="flex border row-span-full px-3 py-10">
			<div class="flex flex-col gap-2 w-full">
				<AppButton
					v-for="item of navList"
					:key="item.route.name"
					:to="item.route"
					variant="personal-area"
				>
					{{ item.name }}
				</AppButton>
			</div>
		</div>
		<div class="flex justify-center items-center border">
			<AppButton
				:to="SITEMAP.personalAreaCreateTicket.route"
				variant="personal-area"
			>
				Создать тикет
			</AppButton>
			<AppButton
				label="Выйти"
				class="max-w-[400px]"
				@click="logout()"
			/>
		</div>
		<div class="py-4 px-12">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import { logout } from '~/src/features/auth'
import AppButton from '~/src/shared/ui/AppButton.vue'
import { SITEMAP } from '~/src/shared/router/sitemap'

const navList = [
	SITEMAP.personalAreaCreateServer,
	SITEMAP.personalAreaMyServers,
	SITEMAP.personalAreaProfile,
	SITEMAP.personalAreaFAQ,
	SITEMAP.personalAreaBalance,
	SITEMAP.personalAreaDocuments,
] as const
</script>
