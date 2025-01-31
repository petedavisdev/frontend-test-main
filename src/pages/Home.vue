<template>
	<div class="p-8 space-y-8">
		<h1 class="text-3xl/7 font-semibold text-gray-900">Home</h1>
		<Header />

		<Tasks :tasks="topLevelTasks" />

		<div>
			<p class="text-sm mb-1 font-medium">Brownie points:</p>
			<ul class="text-sm list-disc pl-4 text-gray-700">
				<li>Filters to hide/show completed tasks</li>
				<li>Allow users to add a due date to a task</li>
				<li>Allow reordering of tasks</li>
				<li>Allow subtasks to have subtasks</li>
				<li>Add additional cypress tests</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import Header from '@/components/Header.vue';
import Tasks from '@/components/Tasks.vue';
import { useTasksStore } from '@/stores/useTasksStore';
const { topLevelTasks } = storeToRefs(useTasksStore());

/**
 * Digistorm frontend test main tasks
 * Add/remove/manipulate this array as needed to complete the test
 *
 * Reference of main tasks
 * - Allow the user to add a new task
 * - Allow users to delete a task
 * - Show the badge in a different color for completed tasks
 * - Allow users to edit the title of their task
 * - Allow users to add sub tasks
 * - Display completed tasks on a seperate page
 */
</script>

<style lang="scss" scoped></style>
