<script>
  import { beforeNavigate } from "$app/navigation";
  import { page } from "$app/stores";
</script>

<section class="flex w-[80%] h-full flex-wrap">
  <nav
    class="flex flex-col w-[200px] border-solid border rounded p-3 mr-3 max-sm:w-full max-sm:my-3"
  >
    <a
      href="/settings/user"
      class="my-2 hover:text-slate-500 {$page.route.id === '/settings/user' && 'text-slate-500'}"
    >
      User Settings
    </a>
    <a
      href="/settings/permission"
      class="my-2 hover:text-slate-500 {$page.route.id === '/settings/permission' &&
        'text-slate-500'}"
    >
      Permission Settings
    </a>
  </nav>

  <main class="flex-auto">
    <slot />
  </main>
</section>
