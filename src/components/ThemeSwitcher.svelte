<script>
  import { onMount } from "svelte";
  import { Moon, Sun } from "lucide-svelte";

  let theme = undefined;

  function toggleTheme() {
    if (theme === "dark") {
      theme = "light";
    } else {
      theme = "dark";
    }
  }

  $: {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme);
    }
  }

  onMount(() => {
    theme = localStorage.getItem("theme") ?? undefined;
  });
</script>

{#if theme !== undefined}
  <button on:click={toggleTheme} class={`dark:text-white`}>
    {#if theme === "dark"}
      <Sun />
    {:else if theme === "light"}
      <Moon />
    {/if}
  </button>
{:else}
  <div class="w-[24px] h-[24px]" />
{/if}
