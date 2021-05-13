import { readable } from 'svelte/store';
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ravi',
	}
});

export default app;