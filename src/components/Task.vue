<template>
	<li>
		<div class="flex items-center justify-between gap-x-6 py-5 px-6">
			<input
				type="text"
				v-model="taskTitle"
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				@input="editTaskTitle(task.id, taskTitle)"
			/>

			<div class="flex flex-none items-center gap-x-4">
				<span
					data-cy="badge"
					class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
					:class="{
						'bg-teal-50 text-teal-600 ring-teal-600/10':
							props.task.complete,
					}"
				>
					{{ props.task.complete ? 'complete' : 'incomplete' }}
				</span>

				<div class="relative flex-none">
					<Menu>
						<template #trigger>
							<Button>
								<span class="sr-only">Open options</span>
								<svg
									class="size-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
									/>
								</svg>
							</Button>
						</template>

						<MenuItem
							@click="
								completeTask(
									props.task.id,
									!props.task.complete
								)
							"
						>
							Mark as
							{{
								!props.task.complete ? 'complete' : 'incomplete'
							}}
						</MenuItem>

						<MenuItem @click="deleteTask(props.task.id)"
							>Delete</MenuItem
						>
					</Menu>
				</div>
			</div>
		</div>
		<div class="py-3 px-6">
			<Tasks
				:tasks="subtasks"
				heading="Subtasks"
				addLabel="Add subtask"
				:parentId="task.id"
			/>
		</div>
	</li>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTasksStore } from '@/stores/useTasksStore';
import Button from '@/components/Button.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import Tasks from '@/components/Tasks.vue';

const emit = defineEmits(['delete']);

const props = defineProps({
	task: Object,
});

const { deleteTask, completeTask, editTaskTitle, getSubtasks } =
	useTasksStore();
const taskTitle = ref(props.task.title);

const subtasks = computed(() => getSubtasks(props.task.id));
</script>
