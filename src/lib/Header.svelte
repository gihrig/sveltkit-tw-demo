<script lang="ts">
  import { page } from '$app/stores';
  import logo from './img/svelte-logo.svg';

  let links = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Todos', path: '/todos' },
  ];
</script>

<header class="flex justify-between">
  <div class="corner">
    <a href="https://kit.svelte.dev" target="_blank">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <nav class="flex justify-center">
    <svg class="m-0 block h-12 justify-end" viewBox="0 0 2 3" aria-hidden="true">
      <path class="fill-navbg" d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      {#each links as { name, path }}
        <li class="pointer relative h-full" class:active={$page.url.pathname === path}>
          <a
            class="flex h-full items-center py-0 px-[.8rem] text-[.8rem]
            font-bold uppercase tracking-widest text-heading no-underline
            transition-colors delay-200 ease-linear hover:text-accent"
            sveltekit:prefetch
            href={path}>{name}</a
          >
        </li>
      {/each}
    </ul>
    <svg class="m-0 block h-12 justify-end" viewBox="0 0 2 3" aria-hidden="true">
      <path class="fill-navbg" d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>

  <div class="corner">
    <!-- TODO put something else here? github link? -->
  </div>
</header>

<style>
  ul {
    @apply relative m-0 h-12 list-none p-0;
    @apply flex items-center justify-center bg-navbg bg-contain;
  }

  .corner {
    @apply h-12 w-12;
  }

  .corner a {
    @apply flex h-full w-full items-center justify-center;
  }

  .corner img {
    @apply h-8 w-8 object-contain;
  }
</style>
