import { writable } from 'svelte/store';

/**
 * Screens
 *
 * 1. boot
 * 2. main
 */
export const screenSlug = writable('boot');

/**
 * Battery/Engery Management
 */
export const batteryCharge = writable(69);

/**
 * MenuBar
 */
export const showCarMenu = writable(false);
export const showMusicMenu = writable(false);
export const showCameraMenu = writable(false);
export const showWindshieldMenu = writable(false);
export const showMoreMenu = writable(false);
export const showDriverSeatMenu = writable(false);
export const showClimateMenu = writable(false);
export const showTemperatureMenu = writable(false);
export const showPassengerSeatMenu = writable(false);
export const showDefrostFrontMenu = writable(false);
export const showDefrostRearMenu = writable(false);
export const showVolumeMenu = writable(false);

/**
 * Debug
 */
export const showDebug = writable(false);
