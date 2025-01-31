import './style.css';

import { createRouter, createWebHashHistory } from 'vue-router';

import App from '@/App.vue';
import Completed from '@/pages/Completed.vue';
import Home from '@/pages/Home.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/completed',
		component: Completed,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
