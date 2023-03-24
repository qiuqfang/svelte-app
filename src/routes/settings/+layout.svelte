<script lang="ts">
  import type { RouteType } from "@/app";
  import GeneralNavBar from "@/components/GeneralNavBar/index.svelte";

  import { routes } from "@/main";

  const navItems = (routes.filter((route) => route.id.startsWith("/settings"))[0] as RouteType)
    .children as RouteType[];
</script>

<section class="flex w-[80%] h-full flex-wrap">
  <GeneralNavBar {navItems} />

  <main class="flex-auto">
    <slot />
  </main>
</section>
