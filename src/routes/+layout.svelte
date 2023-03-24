<script lang="ts">
  import { page } from "$app/stores";
  import type { RouteType } from "../app";
  import { routes } from "../main";
  import "../app.css";

  import DarkMode from "~icons/material-symbols/dark-mode";
  import LightMode from "~icons/material-symbols/light-mode";
  import { onMount } from "svelte";

  const isActive = (route: RouteType, id: string | null) => {
    if (route.children?.length) {
      return route.children.some((child) => child.id === id);
    }
    return route.id === id;
  };

  let isDark = false;

  onMount(() => {
    isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  const toggleMode = () => {
    const theme = isDark ? "" : "dark";
    document.documentElement.classList.value = theme;
    localStorage.theme = theme;
    isDark = !isDark;
  };
</script>

<header>
  <nav class="h-[60px] flex justify-center items-center">
    {#each routes as route}
      <a
        class="mx-1 w-[100px] h-[38px] flex justify-center items-center rounded transition-all hover:bg-slate-500 hover:text-white {isActive(
          route,
          $page.route.id
        ) && 'bg-slate-500 text-white'}"
        href={route.id}
      >
        <svelte:component this={route.icon} />
        <span class="ml-1">{route.name}</span>
      </a>
    {/each}
  </nav>
</header>

<main class="flex justify-center">
  <slot />
</main>

<footer>
  <div class="flex justify-center items-center h-[60px]">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={toggleMode} class="hover:text-slate-500 transition-all">
      {#if isDark}
        <LightMode class="w-6 h-6 cursor-pointer dark:text-white dark:hover:text-slate-500" />
      {:else}
        <DarkMode class="w-6 h-6 cursor-pointer" />
      {/if}
    </span>
  </div>
</footer>
