<script>
  import { Github, Twitter, Linkedin, Rss } from "lucide-svelte";

  const today = new Date();
</script>

<footer class="dark:text-white grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
  <a
    href="https://github.com/kiesman99"
    target="_blank"
    rel="noreferrer"
    title="GitHub"
    class="flex justify-center"
  >
    <span class="flex flex-row gap-2">
      <Github />
      <p>Github</p>
    </span>
  </a>
  <a
    href="https://twitter.com/kiesman99"
    target="_blank"
    rel="noreferrer"
    title="Twitter"
    class="flex justify-center"
  >
    <span class="flex flex-row gap-2">
      <Twitter />
      <p>Twitter</p>
    </span>
  </a>
  <a
    href="https://de.linkedin.com/in/justin-vietz-715280260"
    target="_blank"
    rel="noreferrer"
    title="Linkedin"
    class="flex justify-center"
  >
    <span class="flex flex-row gap-2">
      <Linkedin />

      <p>Linkedin</p>
    </span>
  </a>
  <a href="/rss.xml" title="Rss Feed" class="flex justify-center">
    <span class="flex flex-row gap-2">
      <Rss />
      <p>Rss Feed</p>
    </span>
  </a>
  <hr class="col-span-1 md:col-span-4 mt-5 mb-2" />
  <p class="col-span-1 md:col-span-4 flex justify-center">
    &copy; {today.getFullYear()} Justin Vietz. All rights reserved.
  </p>
</footer>
