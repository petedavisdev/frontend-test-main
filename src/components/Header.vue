<template>
	<div>
		<div class="lg:flex lg:items-center lg:justify-between">
			<nav class="flex gap-8 font-semibold text-gray-900">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/completed">Completed tasks</RouterLink>
			</nav>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
[aria-current='page'] {
	color: teal;
}
</style>
