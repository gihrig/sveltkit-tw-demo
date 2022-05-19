<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<article class="mt-0 flex max-w-full flex-1 flex-col items-center justify-center">
  <picture class="relative h-0 w-full p-0 pb-[calc(100%*495/2048)]">
    <source srcset="svelte-welcome.webp" type="image/webp" />
    <img src="svelte-welcome.png" alt="Welcome" />
  </picture>

  <h1 class="w-full">
    to your new<br />SvelteKit app
  </h1>

  <h2 class="font-normal">
    try editing <strong>src/routes/index.svelte</strong>
  </h2>

  <Counter />
</article>

<style>
  picture img {
    @apply absolute top-0 block h-full w-full;
  }
</style>
