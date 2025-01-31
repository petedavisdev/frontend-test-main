<!-- This component is used recursively to display tasks and their subtasks -->
<template>
	<div data-cy="tasks" class="bg-white sm:rounded-lg border border-gray-200">
		<header
			class="flex justify-between items-center px-4 py-2 sm:px-6 border-b border-gray-200"
		>
			<h3 class="text-base/7 font-semibold text-gray-900">
				{{ props.parentId ? 'Subtasks' : 'My tasks' }}
			</h3>

			<form @submit.prevent="handleAddTask" class="flex gap-x-4">
				<input
					type="text"
					required
					v-model="newTaskTitle"
					ref="newTaskInput"
					class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
				<Button type="submit">{{
					props.parentId ? 'Add subtask' : 'Add task'
				}}</Button>
			</form>
		</header>

		<ul role="list" class="divide-y divide-gray-200">
			<Task v-for="task in props.tasks" :key="task.id" :task="task" />
		</ul>
	</div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import Button from '@/components/Button.vue';
import Task from '@/components/Task.vue';

import { useTasksStore } from '@/stores/useTasksStore';

const props = defineProps({
	tasks: {
		type: Array,
		required: true,
	},
	parentId: {
		type: Number,
		default: null,
	},
});

const { addTask } = useTasksStore();

const newTaskTitle = ref('');
const newTaskInput = useTemplateRef(null);

function handleAddTask() {
	addTask(newTaskTitle.value, props.parentId);
	newTaskTitle.value = '';
	newTaskInput.value.focus();
}
</script>
