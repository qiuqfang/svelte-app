<script lang="ts">
  import { page } from "$app/stores";
  import type { RouteType } from "../../app";

  export let navItems: RouteType[];

</script>

<nav class="flex flex-col w-[200px] border-solid border rounded p-3 mr-3 max-sm:w-full max-sm:my-3">
  {#each navItems as navItem}
    <a
      href={navItem.id}
      class="my-2 hover:text-slate-500 {$page.route.id === navItem.id && 'text-slate-500'}"
    >
      {navItem.name}
    </a>
  {/each}
</nav>
