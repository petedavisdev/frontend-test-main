<template>
	<button
		:type="props.type"
		class="rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-100"
		@click="emit('click')"
	>
		<slot />
	</button>
</template>

<script setup>
const emit = defineEmits(['click']);

const props = defineProps({
	type: {
		type: String,
		default: 'button',
	},
});
</script>
