<script lang="ts">
  import { page } from '$app/stores';
  import logo from './img/svelte-logo.svg';
  import repo from './img/GitHub-Mark-Light-32px.png';

  let links = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Todos', path: '/todos' },
  ];
</script>

<header class="flex justify-between">
  <!-- Left corner -->
  <div class="h-12 w-12">
    <a
      class="flex h-full w-full items-center justify-center"
      href="https://kit.svelte.dev"
      target="_blank"
    >
      <img class="h-8 w-8 object-contain" src={logo} title="SveltKit" alt="SvelteKit" />
    </a>
  </div>

  <nav class="flex justify-center">
    <svg class="m-0 block h-12 justify-end" viewBox="0 0 2 3" aria-hidden="true">
      <path class="fill-navbg" d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul
      class="relative m-0 flex h-12 list-none items-center justify-center bg-navbg bg-contain p-0"
    >
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

  <!-- Right corner -->
  <div class="h-12 w-12">
    <a
      class="flex h-full w-full items-center justify-center"
      href="https://github.com/gihrig/sveltkit-tw-demo"
      target="_blank"
    >
      <img class="h-8 w-8 object-contain" src={repo} title="Repository" alt="Repository" />
    </a>
  </div>
</header>
