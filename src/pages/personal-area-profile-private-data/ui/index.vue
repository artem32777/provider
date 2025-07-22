<script setup lang="ts">
import PrivateDataItem from './PrivateDataItem.vue'
</script>

<template>
	<div>
		<PrivateDataItem
			name="ООО «ТехноСфера»"
			label="Юридические данные"
			@change="console.log($event)"
		/>
	</div>
</template>
