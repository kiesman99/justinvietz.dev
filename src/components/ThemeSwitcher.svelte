<script>
  import { getTheme } from "src/scripts/theme";
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
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }

  onMount(() => {
    theme = getTheme();
  });
</script>

<button on:click={toggleTheme} class={`dark:text-white`}>
  {#if theme === "dark"}
    <Sun />
  {:else if theme === "light"}
    <Moon />
  {/if}
</button>
