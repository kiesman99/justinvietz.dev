<script>
    export let title;
    export let pubDate;
    export let updatedDate;
</script>

<span class="flex flex-col justify-center items-center my-5 md:my-20">
    {#if pubDate}
    <p class="dark:text-white">
        Published:{" "}
        <time>{new Intl.DateTimeFormat("en-US").format(pubDate)}</time>
      </p>
    {/if}
    {#if updatedDate}
    <div class="dark:text-white">
        Last updated on <time>{updatedDate}</time>
      </div>
    {/if}
  <h1 class="text-center text-5xl mb-7 mt-2 dark:text-white">{title}</h1>
</span>
