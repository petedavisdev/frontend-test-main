import { computed, ref } from 'vue';

import { defineStore } from 'pinia';
import initialTasks from '@/data/tasks.json';

export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref(initialTasks);

	const topLevelTasks = computed(() => {
		return tasks.value.filter((task) => !task.parentId);
	});

	const nextTaskId = computed(() => {
		const taskIds = tasks.value.flatMap((task) => task.id);
		return Math.max(...taskIds) + 1;
	});

	const completedTasks = computed(() => {
		return tasks.value.filter((task) => task.complete);
	});

	function getSubtasks(taskId) {
		return tasks.value.filter((task) => task.parentId === taskId);
	}

	function addTask(title, parentId) {
		const task = {
			id: nextTaskId.value,
			title,
			complete: false,
			parentId,
		};
		tasks.value.push(task);
	}

	function deleteTask(id) {
		console.log(id);
		tasks.value = tasks.value.filter((task) => task.id !== id);
	}

	function editTaskTitle(id, newTitle) {
		tasks.value = tasks.value.map((task) =>
			task.id === id ? { ...task, title: newTitle } : task
		);
	}

	function completeTask(id, newValue) {
		tasks.value = tasks.value.map((task) =>
			task.id === id ? { ...task, complete: newValue } : task
		);
	}

	return {
		completedTasks,
		tasks,
		topLevelTasks,
		getSubtasks,
		addTask,
		deleteTask,
		editTaskTitle,
		completeTask,
	};
});
