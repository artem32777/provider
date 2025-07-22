<script setup lang="ts">
import { OffersTab } from '~/src/entities/offers-tab'
</script>

<template>
	<section class="ready-solutions">
		<UContainer class="p-0 lg:py-[60px]">
			<div class="rounded-[40px] py-9 px-6 lg:p-[60px] lg:pl-[44px] lg:pr-[32px] bg-white">
				<h2 class="mobile-h2 mb-9 lg:desktop-h2 lg:mb-[56px] lg:pl-[16px]">
					Готовые решения
				</h2>

				<OffersTab />
			</div>
		</UContainer>
	</section>
</template>
