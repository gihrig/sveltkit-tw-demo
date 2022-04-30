<script lang="ts">
  import { page } from '$app/stores';
  import logo from './img/svelte-logo.svg';
</script>

<header>
  <div class="corner">
    <a href="https://kit.svelte.dev" target="_blank">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      <li class:active={$page.url.pathname === '/'}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
      <li class:active={$page.url.pathname === '/todos'}>
        <a sveltekit:prefetch href="/todos">Todos</a>
      </li>
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>

  <div class="corner">
    <!-- TODO put something else here? github link? -->
  </div>
</header>

<style>
  header {
    @apply flex justify-between;
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

  nav {
    @apply flex justify-center;
  }

  nav a {
    /* TODO: Custom values are only for exact match to SvelteKit example */
    @apply flex h-full items-center py-0 px-[.8rem];
    @apply text-[.8rem] font-bold text-heading hover:text-accent;
    @apply uppercase tracking-widest no-underline;
    @apply transition-colors delay-200 ease-linear;
  }

  svg {
    @apply m-0 block h-12 justify-end;
  }

  path {
    @apply fill-navbg;
  }

  ul {
    @apply relative m-0 h-12 list-none p-0;
    @apply flex items-center justify-center bg-navbg bg-contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    content: ''; /* Tailwind does not generate classes if 'content-none' is used*/
    --ctr: calc(50% - 6px);
    @apply absolute top-0 left-[var(--ctr)] h-0 w-0;
    @apply border-6 border-solid border-x-transparent border-t-accent;
  }
</style>
