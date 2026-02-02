// src/stores/navStore.ts
import { atom } from 'nanostores';

// "home" is the default initial value
export const currentNav = atom<string>('home');