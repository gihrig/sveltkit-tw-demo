<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import '../app.css';
</script>

<Header />

<main class="my-0 mx-auto box-border flex w-full max-w-screen-lg flex-1 flex-col p-4">
  <slot />
</main>

<Footer />
