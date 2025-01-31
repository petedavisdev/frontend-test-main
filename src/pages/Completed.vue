<template>
	<div class="p-8 space-y-8">
		<h1 class="text-3xl/7 font-semibold text-gray-900">Completed tasks</h1>
		<Header />
		<Tasks :tasks="completedTasks" />
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import Header from '@/components/Header.vue';
import Tasks from '@/components/Tasks.vue';
import { useTasksStore } from '@/stores/useTasksStore';
const { completedTasks } = storeToRefs(useTasksStore());
</script>
