<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import '../app.css';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    @apply flex flex-1 flex-col;
    @apply p-4;
    @apply w-full;
    @apply max-w-screen-lg;
    @apply my-0 mx-auto;
    @apply box-border;
  }
</style>
