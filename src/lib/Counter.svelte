<script lang="ts">
  import { spring } from 'svelte/motion';

  let count = 0;

  const displayed_count = spring();
  $: displayed_count.set(count);
  $: offset = modulo($displayed_count, 1);

  function modulo(n: number, m: number) {
    // handle negative numbers
    return ((n % m) + m) % m;
  }
</script>

<section class="my-4 mx-0 flex border-y border-solid border-slate-300">
  <button
    class="flex w-16 touch-manipulation items-center justify-center border-0
    bg-transparent p-0 text-3.5xl text-text hover:bg-hoverbg"
    on:click={() => (count -= 1)}
    aria-label="Decrease the counter by one"
  >
    <svg class="h-1/4 w-1/4" aria-hidden="true" viewBox="0 0 1 1">
      <path
        style="vector-effect: non-scaling-stroke;"
        class="stroke-text stroke-2"
        d="M0,0.5 L1,0.5"
      />
    </svg>
  </button>

  <div class="relative h-16 w-32 overflow-hidden text-center">
    <div class="absolute h-full w-full" style="transform: translate(0, {100 * offset}%)">
      <strong
        class="absolute top-[-100%] flex h-full w-full select-none
          items-center justify-center text-6.5xl font-normal text-accent"
        aria-hidden="true"
      >
        {Math.floor($displayed_count + 1)}
      </strong>
      <strong
        class="absolute flex h-full w-full items-center justify-center
          text-6.5xl font-normal text-accent"
      >
        {Math.floor($displayed_count)}
      </strong>
    </div>
  </div>

  <button
    class="flex w-16 touch-manipulation items-center justify-center border-0
    bg-transparent p-0 text-3.5xl text-text hover:bg-hoverbg"
    on:click={() => (count += 1)}
    aria-label="Increase the counter by one"
  >
    <svg class="h-1/4 w-1/4" aria-hidden="true" viewBox="0 0 1 1">
      <path
        style="vector-effect: non-scaling-stroke;"
        class="stroke-text stroke-2"
        d="M0,0.5 L1,0.5 M0.5,0 L0.5,1"
      />
    </svg>
  </button>
</section>
