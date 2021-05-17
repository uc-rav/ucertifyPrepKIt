import { writable } from 'svelte/store';

export const questionReffrence = writable(-1);
export const answersClone = writable(new Array(10).fill(null));
//export default questionReffrence;