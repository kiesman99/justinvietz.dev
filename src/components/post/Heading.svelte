<script>
    export let title;
    export let pubDate;
    export let updatedDate;
    export let draft;
</script>

{#if draft}
<div class="border border-red-500 p-5 rounded-md dark:text-white flex flex-col items-center">
  <p class="text-5xl ">THIS POST IS A DRAFT</p>
<p>Please forgive grammatical and spelling errors. This article is currently under construction.</p>
</div>
{/if}

<span class="flex flex-col justify-center items-center my-5 md:my-15">
  <h1 class="text-center text-5xl mb-7 mt-2 dark:text-white">{title}</h1>
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
</span>
