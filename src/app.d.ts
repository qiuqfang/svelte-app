/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export type RouteType = {
  id: string;
  name: string;
  icon?: SvelteComponentTyped<svelte.JSX.IntrinsicElements['svg']>;
  children?: RouteType[];
};

export {};
