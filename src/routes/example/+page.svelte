<script>
  import { onMount } from "svelte";

  onMount(async () => {
    document.title = "Example";
  });

  let count = 0;

  const handleClickButton = () => {
    count++;
  };
</script>

<section>
  <div>
    <button on:click={handleClickButton} class=" border rounded hover:opacity-30 px-1">
      Click {count}
    </button>
  </div>
</section>
