<script lang="ts">
  import A from '$lib/A.svelte';
</script>

<footer>
  <p>
    visit <A
      style="font-bold"
      href="https://kit.svelte.dev"
      target="_blank"
      text="kit.svelte.dev"
    /> to learn SvelteKit
  </p>
</footer>

<style>
  footer {
    @apply flex;
    @apply flex-col;
    @apply items-center;
    @apply justify-center;
    @apply py-2 sm:py-10;
  }
</style>
